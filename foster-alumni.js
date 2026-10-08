function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function parseAlumniDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

function formatAlumniDate(date) {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function getZodiacSign(birthday) {
  const date = parseAlumniDate(birthday);
  if (!date) return "";
  const monthDay = (date.getMonth() + 1) * 100 + date.getDate();
  const signs = [
    [120, "Capricorn"], [219, "Aquarius"], [321, "Pisces"], [420, "Aries"],
    [521, "Taurus"], [621, "Gemini"], [723, "Cancer"], [823, "Leo"],
    [923, "Virgo"], [1023, "Libra"], [1122, "Scorpio"], [1222, "Sagittarius"],
    [1232, "Capricorn"]
  ];
  return signs.find(([boundary]) => monthDay < boundary)?.[1] || "Capricorn";
}

function getAlumniAge(birthday, today = new Date()) {
  const birthDate = parseAlumniDate(birthday);
  if (!birthDate) return null;
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayHasPassed = today.getMonth() + 1 > birthDate.getMonth() + 1
    || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!birthdayHasPassed) age -= 1;
  return age >= 0 ? age : null;
}

function getAlumniCelebrations(kitten, today = new Date()) {
  const birthday = parseAlumniDate(kitten.birthday);
  const adoptionDate = parseAlumniDate(kitten.adoptionDate);
  const celebratesBirthday = Boolean(birthday && today.getMonth() === birthday.getMonth());
  const birthdayMessage = Boolean(birthday
    && today.getMonth() === birthday.getMonth()
    && today.getDate() === birthday.getDate());
  const gotchaDayMessage = Boolean(adoptionDate
    && today.getMonth() === adoptionDate.getMonth()
    && today.getDate() === adoptionDate.getDate());

  return {
    celebratesBirthday,
    birthdayMessage,
    birthdayAge: birthdayMessage ? today.getFullYear() - birthday.getFullYear() : null,
    gotchaDayMessage
  };
}

function getConfirmedAlumni(kittenList) {
  return kittenList.filter(kitten =>
    kitten
    && kitten.status === "Adopted"
    && kitten.id
    && kitten.name
    && kitten.gender
    && parseAlumniDate(kitten.birthday)
    && parseAlumniDate(kitten.adoptionDate)
    && Number.isInteger(Number(kitten.fosterLitter))
    && Number(kitten.fosterLitter) > 0
    && kitten.image
  );
}

function sortAlumniByLitterAndAdoptionDate(kittenList) {
  return [...kittenList].sort((left, right) =>
    Number(right.fosterLitter) - Number(left.fosterLitter)
    || parseAlumniDate(right.adoptionDate) - parseAlumniDate(left.adoptionDate)
    || left.name.localeCompare(right.name)
  );
}

function formatAlumniLitter(litterNumber) {
  const number = Number(litterNumber);
  const remainder = number % 100;
  const suffix = remainder >= 11 && remainder <= 13
    ? "th"
    : ({ 1: "st", 2: "nd", 3: "rd" }[number % 10] || "th");
  return `${number}${suffix} Foster Litter`;
}

function renderAlumniCard(kitten, alumniIds, today = new Date()) {
  const celebrations = getAlumniCelebrations(kitten, today);
  const age = getAlumniAge(kitten.birthday, today);
  const photos = Array.isArray(kitten.photos)
    ? kitten.photos.filter(photo => typeof photo === "string" && photo.trim())
    : [];
  const gallery = photos.length
    ? `<div class="alumni-gallery" aria-label="More photos of ${escapeHTML(kitten.name)}">${photos.map((photo, index) => `
      <img src="${escapeHTML(photo)}" alt="${escapeHTML(kitten.name)}${photos.length > 1 ? `, additional photo ${index + 1}` : ", additional photo"}" loading="lazy">
    `).join("")}</div>`
    : "";
  const companionLink = kitten.companionId && alumniIds.has(kitten.companionId)
    ? `<a class="alumni-companion" href="#alumni-${escapeHTML(kitten.companionId)}">Adopted with ${escapeHTML(alumniIds.get(kitten.companionId))}</a>`
    : "";
  const celebrationMessages = [
    celebrations.birthdayMessage ? `<p class="alumni-celebration" role="status">Happy Birthday, ${escapeHTML(kitten.name)}! ${celebrations.birthdayAge} years old today.</p>` : "",
    celebrations.gotchaDayMessage ? `<p class="alumni-celebration alumni-gotcha" role="status">Happy Gotcha Day, ${escapeHTML(kitten.name)}!</p>` : ""
  ].join("");

  return `<article class="kitten-card alumni-card" id="alumni-${escapeHTML(kitten.id)}">
    <div class="card-photo-wrap alumni-main-photo">
      <img src="${escapeHTML(kitten.image)}" alt="${escapeHTML(kitten.name)}" loading="lazy">
      ${celebrations.celebratesBirthday ? '<span class="alumni-birthday-cake" aria-label="Birthday month">🎂</span>' : ""}
    </div>
    <div class="card-content alumni-card-content">
      <h3>${escapeHTML(kitten.name)}</h3>
      <dl class="alumni-details">
        <div><dt>Gender</dt><dd>${escapeHTML(kitten.gender)}</dd></div>
        <div><dt>Birthday</dt><dd>${formatAlumniDate(parseAlumniDate(kitten.birthday))}</dd></div>
        <div><dt>Zodiac</dt><dd>${escapeHTML(getZodiacSign(kitten.birthday))}</dd></div>
        <div><dt>Age</dt><dd>${age === null ? "—" : `${age} ${age === 1 ? "year" : "years"}`}</dd></div>
        <div><dt>Gotcha Day</dt><dd>${formatAlumniDate(parseAlumniDate(kitten.adoptionDate))}</dd></div>
        <div><dt>Foster litter</dt><dd>${escapeHTML(formatAlumniLitter(kitten.fosterLitter))}</dd></div>
      </dl>
      ${gallery}
      ${companionLink}
      ${celebrationMessages}
    </div>
  </article>`;
}

function renderFosterAlumni(kittenList, today = new Date()) {
  if (typeof document === "undefined") return;
  const container = document.querySelector("#foster-alumni");
  if (!container) return;

  const alumni = sortAlumniByLitterAndAdoptionDate(getConfirmedAlumni(kittenList));
  if (!alumni.length) {
    container.innerHTML = '<div class="empty-state">Our forever-home alumni will be celebrated here. Check back to meet the kittens who have found their families!</div>';
    return;
  }

  const alumniIds = new Map(alumni.map(kitten => [kitten.id, kitten.name]));
  const groups = new Map();
  alumni.forEach(kitten => {
    const litter = Number(kitten.fosterLitter);
    if (!groups.has(litter)) groups.set(litter, []);
    groups.get(litter).push(kitten);
  });

  container.innerHTML = [...groups.entries()].map(([litter, kittens]) => {
    const heading = formatAlumniLitter(litter);
    const cards = kittens.map(kitten => renderAlumniCard(kitten, alumniIds, today)).join("");
    return `<section class="alumni-litter" aria-labelledby="alumni-litter-${litter}">
      <div class="alumni-litter-heading">
        <h2 id="alumni-litter-${litter}">${escapeHTML(heading)}</h2>
        <div class="alumni-carousel-controls" aria-label="${escapeHTML(heading)} card controls">
          <button class="carousel-button alumni-arrow" type="button" aria-label="Previous alumni in ${escapeHTML(heading)}">‹</button>
          <button class="carousel-button alumni-arrow" type="button" aria-label="Next alumni in ${escapeHTML(heading)}">›</button>
        </div>
      </div>
      <div class="alumni-cards" role="region" aria-label="${escapeHTML(heading)} alumni" tabindex="0">${cards}</div>
    </section>`;
  }).join("");

  container.querySelectorAll(".alumni-litter").forEach(section => {
    const track = section.querySelector(".alumni-cards");
    const [previous, next] = section.querySelectorAll(".alumni-arrow");
    const updateControls = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= maxScroll - 2;
    };
    const scrollCards = direction => {
      const card = track.querySelector(".alumni-card");
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
    };

    previous.addEventListener("click", () => scrollCards(-1));
    next.addEventListener("click", () => scrollCards(1));
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    updateControls();
  });
}

if (typeof window !== "undefined") {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const alumni = window.PAWS_FOSTER_ALUMNI;
  if (!Array.isArray(alumni)) {
    const container = document.querySelector("#foster-alumni");
    if (container) {
      container.innerHTML = '<div class="empty-state" role="alert">Foster alumni could not be loaded. Please try again later.</div>';
    }
    console.error("Foster alumni data is missing or invalid.");
  } else {
    renderFosterAlumni(alumni);
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    escapeHTML,
    parseAlumniDate,
    getZodiacSign,
    getAlumniAge,
    getAlumniCelebrations,
    getConfirmedAlumni,
    sortAlumniByLitterAndAdoptionDate,
    formatAlumniLitter,
    renderAlumniCard,
    renderFosterAlumni
  };
}
