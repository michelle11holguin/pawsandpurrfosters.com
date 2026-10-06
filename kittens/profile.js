function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatBirthday(dateString) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

function kittenAge(dateString) {
  if (!dateString) return "";
  const birthDate = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(birthDate.getTime()) || birthDate > new Date()) return "";

  const today = new Date();
  let months = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
  if (today.getDate() < birthDate.getDate()) months -= 1;
  if (months < 0) return "";

  if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  }

  const years = Math.floor(months / 12);
  return `${years} ${years === 1 ? "year" : "years"}`;
}

function getPairingData(kitten) {
  const pairing = kitten.pairing || kitten.mustBeAdoptedWith || kitten.preferredPair;
  if (!pairing) return null;

  if (typeof pairing === "string") {
    const pairedKitten = window.PAWS_KITTENS?.find(item => item.id === pairing || item.name === pairing);
    return { type: "must", kittenId: pairedKitten?.id || pairing, kittenName: pairedKitten?.name || pairing };
  }

  if (typeof pairing === "object") {
    const pairedKitten = pairing.kittenId
      ? window.PAWS_KITTENS?.find(item => item.id === pairing.kittenId)
      : window.PAWS_KITTENS?.find(item => item.id === pairing.id || item.name === pairing.name || item.name === pairing.kittenName);

    return {
      type: pairing.type === "preferred" ? "preferred" : "must",
      kittenId: pairedKitten?.id || pairing.kittenId || pairing.id || pairing.kittenName || pairing.name,
      kittenName: pairedKitten?.name || pairing.kittenName || pairing.name || pairing.kittenId || pairing.id
    };
  }

  return null;
}

function renderProfile(kitten) {
  if (typeof document === "undefined") return;
  const root = document.querySelector("#profile-main");
  if (!root) return;

  if (!kitten) {
    root.innerHTML = '<div class="profile-not-found"><h1>Kitten profile not found</h1><p>Choose a kitten from the homepage to see their profile.</p><a class="button primary" href="../index.html#kittens">Browse kittens</a></div>';
    return;
  }

  const photoSet = [...new Set([kitten.image, ...(kitten.photos || [])].filter(Boolean))];
  const galleryPhotos = photoSet.length ? photoSet : [];
  const mainImage = galleryPhotos[0] ? `../${galleryPhotos[0]}` : "";
  const photoGallery = galleryPhotos.length
    ? `<div class="profile-gallery">
        <button class="profile-main-photo photo-open" type="button" data-index="0" aria-label="Open ${escapeHTML(kitten.name)}'s main photo">
          <img src="${escapeHTML(mainImage)}" alt="${escapeHTML(kitten.name)}">
        </button>
        <div class="profile-thumbnails">${galleryPhotos.slice(1).map((photo, index) => `
          <button class="photo-open" type="button" data-index="${index + 1}" aria-label="Open ${escapeHTML(kitten.name)} photo ${index + 2}">
            <img src="../${escapeHTML(photo)}" alt="${escapeHTML(kitten.name)} photo ${index + 2}" loading="lazy">
          </button>`).join("")}</div>
      </div>`
    : '<div class="profile-photo-placeholder">Add this kitten\'s photos in assets/kittens/</div>';

  const bioText = kitten.bio || "Coming Soon";
  const petfinderText = kitten.petfinderUrl
    ? `<a class="button primary" href="${escapeHTML(kitten.petfinderUrl)}" target="_blank" rel="noopener noreferrer">View ${escapeHTML(kitten.name)} on Petfinder</a>`
    : `<p class="profile-meta-label"><strong>Petfinder:</strong> Coming Soon</p>`;

  const traits = kitten.personalityTraits?.length
    ? `<section class="profile-detail"><h2>Personality</h2><ul class="profile-traits">${kitten.personalityTraits.map(trait => `<li>${escapeHTML(trait)}</li>`).join("")}</ul></section>`
    : "";

  const compatibilityItems = [
    ["Dogs", kitten.compatibility?.dogs],
    ["Cats", kitten.compatibility?.cats],
    ["Younger children", kitten.compatibility?.youngerChildren],
    ["Older children", kitten.compatibility?.olderChildren]
  ].filter(([, value]) => value);
  const compatibility = compatibilityItems.length
    ? `<section class="profile-detail"><h2>Home compatibility</h2><dl>${compatibilityItems.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl></section>`
    : "";

  const health = kitten.healthChecklist?.length
    ? `<section class="profile-detail"><h2>Vet and health</h2><ul>${kitten.healthChecklist.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>`
    : "";

  const requirements = kitten.adoptionRequirements?.length
    ? `<section class="profile-detail"><h2>Adoption requirements</h2><ul>${kitten.adoptionRequirements.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>`
    : "";

  const idealHome = kitten.idealHome ? `<section class="profile-detail"><h2>Ideal home</h2><p>${escapeHTML(kitten.idealHome)}</p></section>` : "";

  const pairingData = getPairingData(kitten);
  const pairing = pairingData
    ? `<section class="profile-detail"><h2>${pairingData.type === "must" ? "Must Be Adopted With" : "Preferred Pair"}</h2><p><a class="text-link" href="${escapeHTML(`profile-template.html?id=${pairingData.kittenId}`)}">${escapeHTML(pairingData.kittenName)}</a></p></section>`
    : "";

  const meeting = kitten.whereToMeet || kitten.eventInformation
    ? `<section class="profile-detail"><h2>Where to meet ${escapeHTML(kitten.name)}</h2>${kitten.whereToMeet ? `<p>${escapeHTML(kitten.whereToMeet)}</p>` : ""}${kitten.eventInformation ? `<p>${escapeHTML(kitten.eventInformation)}</p>` : ""}</section>`
    : "";

  const video = kitten.videoUrl
    ? `<section class="profile-detail"><h2>Video</h2><a class="text-link" href="${escapeHTML(kitten.videoUrl)}" target="_blank" rel="noopener noreferrer">Watch ${escapeHTML(kitten.name)}'s video ↗</a></section>`
    : "";

  const adoptionReminder = `
    <section class="profile-detail profile-reminder">
      <h2>Interested in adopting ${escapeHTML(kitten.name)}?</h2>
      ${pairingData ? `<p>${escapeHTML(kitten.name)} ${pairingData.type === "must" ? "must be adopted with" : "is happiest with"} <a class="text-link" href="${escapeHTML(`profile-template.html?id=${pairingData.kittenId}`)}">${escapeHTML(pairingData.kittenName)}</a>.</p>` : "<p>We would love to hear from you.</p>"}
      <p class="adoption-policy">Kittens six months and younger are adopted in pairs in accordance with rescue policy. Bonded pairs must be adopted together regardless of age. Pairing recommendations and requirements are listed on each kitten's profile.</p>
      <a class="button primary" href="../how-to-adopt.html">Learn How to Adopt</a>
    </section>
  `;

  document.title = `Meet ${kitten.name} | Paws & Purr Fosters`;
  root.innerHTML = `<div class="profile-layout">
    <div>${photoGallery}</div>
    <div class="profile-intro">
      <p class="eyebrow">Meet a foster kitten</p>
      <h1>${escapeHTML(kitten.name)}</h1>
      <p class="profile-status">${escapeHTML(kitten.adoptionStatus || kitten.status || "")}</p>
      ${kitten.birthday ? `<p><strong>Birthday:</strong> ${escapeHTML(formatBirthday(kitten.birthday))}${kittenAge(kitten.birthday) ? ` · ${escapeHTML(kittenAge(kitten.birthday))} old` : ""}</p>` : ""}
      ${kitten.gender ? `<p><strong>Gender:</strong> ${escapeHTML(kitten.gender)}</p>` : ""}
      ${kitten.litterNumber ? `<p><strong>Litter:</strong> ${escapeHTML(kitten.litterNumber)}</p>` : ""}
      <p class="profile-bio">${escapeHTML(bioText)}</p>
      ${petfinderText}
    </div>
  </div>
  <div class="profile-details">
    ${traits}${idealHome}${compatibility}${health}${requirements}${pairing}${meeting}${video}${adoptionReminder}
  </div>`;

  const lightbox = document.querySelector("#photo-lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");

  const openLightbox = index => {
    if (!lightbox || !lightboxImage || !galleryPhotos.length) return;
    const nextIndex = (index + galleryPhotos.length) % galleryPhotos.length;
    lightboxImage.src = `../${galleryPhotos[nextIndex]}`;
    lightboxImage.alt = `${kitten.name} photo ${nextIndex + 1}`;
    lightbox.dataset.index = String(nextIndex);
    lightbox.showModal();
  };

  const closeLightbox = () => {
    if (lightbox && typeof lightbox.close === "function") lightbox.close();
  };

  root.querySelectorAll(".photo-open").forEach(button => {
    button.addEventListener("click", () => {
      const selectedIndex = Number(button.dataset.index || 0);
      openLightbox(selectedIndex);
    });
  });

  lightboxPrev?.addEventListener("click", () => {
    const currentIndex = Number(lightbox.dataset.index || 0);
    openLightbox(currentIndex - 1);
  });

  lightboxNext?.addEventListener("click", () => {
    const currentIndex = Number(lightbox.dataset.index || 0);
    openLightbox(currentIndex + 1);
  });

  document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", event => {
    if (event.target === event.currentTarget) closeLightbox();
  });

  let touchStartX = null;
  lightbox?.addEventListener("touchstart", event => {
    const firstTouch = event.touches[0];
    touchStartX = firstTouch ? firstTouch.clientX : null;
  }, { passive: true });

  lightbox?.addEventListener("touchend", event => {
    const endTouch = event.changedTouches[0];
    if (touchStartX === null || !endTouch) return;
    const delta = endTouch.clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      const currentIndex = Number(lightbox.dataset.index || 0);
      openLightbox(delta < 0 ? currentIndex + 1 : currentIndex - 1);
    }
    touchStartX = null;
  }, { passive: true });

  document.addEventListener("keydown", event => {
    if (!lightbox || !lightbox.open) return;
    if (event.key === "Escape" && lightbox.open) closeLightbox();
    if (event.key === "ArrowRight" && lightbox.open) {
      const currentIndex = Number(lightbox.dataset.index || 0);
      openLightbox(currentIndex + 1);
    }
    if (event.key === "ArrowLeft" && lightbox.open) {
      const currentIndex = Number(lightbox.dataset.index || 0);
      openLightbox(currentIndex - 1);
    }
  });

  document.querySelector("#profile-main")?.addEventListener("error", event => {
    if (event.target instanceof HTMLImageElement) event.target.closest("button")?.classList.add("image-unavailable");
  }, true);
}

if (typeof globalThis !== "undefined") {
  globalThis.escapeHTML = escapeHTML;
  globalThis.formatBirthday = formatBirthday;
  globalThis.kittenAge = kittenAge;
  globalThis.getPairingData = getPairingData;
  globalThis.renderProfile = renderProfile;
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const profileId = new URLSearchParams(window.location.search).get("id");
  const currentKitten = window.PAWS_KITTENS?.find(kitten => kitten.id === profileId);
  renderProfile(currentKitten);
}

if (typeof module !== "undefined") {
  module.exports = {
    escapeHTML,
    formatBirthday,
    kittenAge,
    getPairingData,
    renderProfile
  };
}
