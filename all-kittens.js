function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function statusClassName(status) {
  const normalized = String(status || "Available");
  const map = {
    "Available": "status-available",
    "Returned — Available": "status-returned",
    "Pending Interest": "status-pending",
    "Almost Available": "status-almost",
    "Pre-Adopted": "status-pre-adopted",
    "Coming Soon": "status-coming-soon",
    "Adopted": "status-adopted"
  };
  return map[normalized] || "status-available";
}

function shortBlurb(kitten) {
  if (kitten.description) return kitten.description;
  if (kitten.bio) return kitten.bio;
  return "This sweet kitten is growing, learning, and preparing for their next chapter in foster care.";
}

function formatLitterHeading(litterNumber) {
  const numeric = Number(litterNumber);
  if (!Number.isFinite(numeric) || numeric <= 0) return "Current foster kittens";

  const remainder = numeric % 100;
  let suffix = "th";
  if (remainder >= 11 && remainder <= 13) {
    suffix = "th";
  } else {
    switch (numeric % 10) {
      case 1: suffix = "st"; break;
      case 2: suffix = "nd"; break;
      case 3: suffix = "rd"; break;
      default: suffix = "th";
    }
  }

  return `${numeric}${suffix} Foster Litter`;
}

function groupKittensByLitter(kittenList) {
  const grouped = new Map();

  kittenList.forEach(kitten => {
    const litterNumber = kitten.litterNumber ?? kitten.litter;
    const entryKey = litterNumber === undefined || litterNumber === null || litterNumber === "" ? "unassigned" : Number(litterNumber);
    if (!grouped.has(entryKey)) grouped.set(entryKey, []);
    grouped.get(entryKey).push(kitten);
  });

  return [...grouped.entries()]
    .filter(([key]) => key !== "unassigned")
    .sort(([left], [right]) => Number(left) - Number(right))
    .map(([litterNumber, kittens]) => ({ litterNumber, kittens }));
}

function renderKittenCard(kitten) {
  const status = kitten.adoptionStatus || kitten.status || "Available";
  const photo = kitten.image
    ? `<img src="${escapeHTML(kitten.image)}" alt="${escapeHTML(kitten.name)}" loading="lazy">`
    : `<div class="photo-placeholder card-photo"><span>Photo coming soon</span></div>`;

  return `<article class="kitten-card">
    <div class="card-photo-wrap">${photo}</div>
    <div class="card-content">
      <span class="status-badge ${statusClassName(status)}">${escapeHTML(status)}</span>
      <h3>${escapeHTML(kitten.name)}</h3>
      <p>${escapeHTML(shortBlurb(kitten))}</p>
      <a class="card-link" href="${escapeHTML(kitten.profileUrl || "#")}">Get to Know ${escapeHTML(kitten.name)} →</a>
    </div>
  </article>`;
}

function renderAllKittens() {
  if (typeof document === "undefined") return;
  const owner = typeof window !== "undefined" ? window : globalThis;
  const container = document.querySelector("#all-kittens-grid");
  if (!container || !Array.isArray(owner.PAWS_KITTENS)) return;

  const groups = groupKittensByLitter(owner.PAWS_KITTENS);

  if (!groups.length) {
    container.innerHTML = '<div class="empty-state">No foster kittens are available to display yet.</div>';
    return;
  }

  container.innerHTML = groups.map(({ litterNumber, kittens }) => `
    <section class="litter-group">
      <h3 class="litter-heading">${escapeHTML(formatLitterHeading(litterNumber))}</h3>
      <div class="litter-track-wrap">
        <button class="litter-arrow litter-arrow-prev" type="button" aria-label="Scroll left">‹</button>
        <div class="litter-track">${kittens.map(renderKittenCard).join("")}</div>
        <button class="litter-arrow litter-arrow-next" type="button" aria-label="Scroll right">›</button>
      </div>
    </section>
  `).join("");

  document.querySelectorAll(".litter-track-wrap").forEach(wrap => {
    const track = wrap.querySelector(".litter-track");
    const prev = wrap.querySelector(".litter-arrow-prev");
    const next = wrap.querySelector(".litter-arrow-next");
    if (!track) return;

    const scrollAmount = () => {
      const card = track.querySelector(".kitten-card");
      return card ? card.getBoundingClientRect().width + 22 : 320;
    };

    prev?.addEventListener("click", () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
    next?.addEventListener("click", () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
  });
}

if (typeof globalThis !== "undefined") {
  globalThis.escapeHTML = escapeHTML;
  globalThis.statusClassName = statusClassName;
  globalThis.shortBlurb = shortBlurb;
  globalThis.groupKittensByLitter = groupKittensByLitter;
  globalThis.renderAllKittens = renderAllKittens;
}

if (typeof document !== "undefined") {
  renderAllKittens();
}

if (typeof module !== "undefined") {
  module.exports = {
    escapeHTML,
    statusClassName,
    shortBlurb,
    groupKittensByLitter,
    renderAllKittens
  };
}
