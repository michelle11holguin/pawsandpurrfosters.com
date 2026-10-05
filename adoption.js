const adoptionGuide = window.PAWS_ADOPTION_GUIDE || {};
const rescueName = document.querySelector("#adoption-rescue-name");
const instructions = document.querySelector("#adoption-application-instructions");
const resourceLinks = document.querySelector("#adoption-resource-links");

if (rescueName && adoptionGuide.rescueName) rescueName.textContent = adoptionGuide.rescueName;
if (instructions && adoptionGuide.applicationInstructions) instructions.textContent = adoptionGuide.applicationInstructions;

function validWebsite(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch {
    return "";
  }
}

if (resourceLinks) {
  const links = [
    ["Rescue website", adoptionGuide.websiteUrl],
    ["Rescue on Petfinder", adoptionGuide.petfinderUrl]
  ].filter(([, href]) => validWebsite(href));
  resourceLinks.innerHTML = links.map(([label, href]) =>
    `<a href="${validWebsite(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`
  ).join("");
  resourceLinks.hidden = links.length === 0;
}
