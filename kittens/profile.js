function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function kittenAge(birthday) {
  if (!birthday) return "";
  const birthDate = new Date(`${birthday}T00:00:00`);
  if (Number.isNaN(birthDate.getTime()) || birthDate > new Date()) return "";
  const today = new Date();
  let months = (today.getFullYear() - birthDate.getFullYear()) * 12 + today.getMonth() - birthDate.getMonth();
  if (today.getDate() < birthDate.getDate()) months -= 1;
  if (months < 0) return "";
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years && remainingMonths) return `${years} ${years === 1 ? "year" : "years"}, ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
  if (years) return `${years} ${years === 1 ? "year" : "years"}`;
  return `${months} ${months === 1 ? "month" : "months"}`;
}

function renderProfile(kitten) {
  const root = document.querySelector("#profile-main");
  if (!root) return;
  if (!kitten) {
    root.innerHTML = '<div class="profile-not-found"><h1>Kitten profile not found</h1><p>Choose a kitten from the homepage to see their profile.</p><a class="button primary" href="../index.html#kittens">Browse kittens</a></div>';
    return;
  }

  const photos = [...new Set([kitten.image, ...(kitten.photos || [])].filter(Boolean))].slice(0, 4);
  const photoGallery = photos.length
    ? `<div class="profile-gallery">
        <button class="profile-main-photo photo-open" type="button" data-photo="${escapeHTML(photos[0])}" aria-label="Open ${escapeHTML(kitten.name)}'s main photo">
          <img src="../${escapeHTML(photos[0])}" alt="${escapeHTML(kitten.name)}">
        </button>
        ${photos.length > 1 ? `<div class="profile-thumbnails">${photos.slice(1).map((photo, index) => `
          <button class="photo-open" type="button" data-photo="${escapeHTML(photo)}" aria-label="Open ${escapeHTML(kitten.name)} photo ${index + 2}">
            <img src="../${escapeHTML(photo)}" alt="${escapeHTML(kitten.name)} photo ${index + 2}" loading="lazy">
          </button>`).join("")}</div>` : ""}
      </div>`
    : '<div class="profile-photo-placeholder">Add this kitten\'s photos in assets/kittens/</div>';

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
  const meeting = kitten.whereToMeet || kitten.eventInformation
    ? `<section class="profile-detail"><h2>Where to meet ${escapeHTML(kitten.name)}</h2>${kitten.whereToMeet ? `<p>${escapeHTML(kitten.whereToMeet)}</p>` : ""}${kitten.eventInformation ? `<p>${escapeHTML(kitten.eventInformation)}</p>` : ""}</section>`
    : "";
  const petfinder = kitten.petfinderUrl
    ? `<a class="button primary" href="${escapeHTML(kitten.petfinderUrl)}" target="_blank" rel="noopener noreferrer">View on Petfinder</a>`
    : "";
  const video = kitten.videoUrl
    ? `<section class="profile-detail"><h2>Video</h2><a class="text-link" href="${escapeHTML(kitten.videoUrl)}" target="_blank" rel="noopener noreferrer">Watch ${escapeHTML(kitten.name)}'s video ↗</a></section>`
    : "";

  document.title = `Meet ${kitten.name} | Paws & Purr Fosters`;
  root.innerHTML = `<div class="profile-layout">
    <div>${photoGallery}</div>
    <div class="profile-intro">
      <p class="eyebrow">Meet a foster kitten</p><h1>${escapeHTML(kitten.name)}</h1>
      <p class="profile-status">${escapeHTML(kitten.adoptionStatus || kitten.status || "")}</p>
      ${kitten.birthday ? `<p><strong>Birthday:</strong> ${escapeHTML(kitten.birthday)}${kittenAge(kitten.birthday) ? ` · ${escapeHTML(kittenAge(kitten.birthday))} old` : ""}</p>` : ""}
      ${kitten.litterNumber ? `<p><strong>Litter:</strong> ${escapeHTML(kitten.litterNumber)}</p>` : ""}
      ${kitten.bio ? `<p class="profile-bio">${escapeHTML(kitten.bio)}</p>` : `<p class="profile-bio">${escapeHTML(kitten.description || "More about this kitten is coming soon.")}</p>`}
      ${petfinder}
    </div>
  </div>
  <div class="profile-details">
    ${traits}${idealHome}${compatibility}${health}${requirements}${meeting}${video}
  </div>`;

  root.querySelectorAll(".photo-open").forEach(button => button.addEventListener("click", () => {
    const dialog = document.querySelector("#photo-lightbox");
    const image = dialog.querySelector("img");
    image.src = `../${button.dataset.photo}`;
    image.alt = `${kitten.name} photo`;
    dialog.showModal();
  }));
}

const profileId = new URLSearchParams(window.location.search).get("id");
const currentKitten = window.PAWS_KITTENS?.find(kitten => kitten.id === profileId);
renderProfile(currentKitten);

document.querySelector(".lightbox-close")?.addEventListener("click", () => document.querySelector("#photo-lightbox").close());
document.querySelector("#photo-lightbox")?.addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.querySelector("#profile-main")?.addEventListener("error", event => {
  if (event.target instanceof HTMLImageElement) event.target.closest("button")?.classList.add("image-unavailable");
}, true);
