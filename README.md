[README.md](https://github.com/user-attachments/files/33066855/README.md)
# Paws & Purr Fosters

This is the static website published with GitHub Pages. It uses plain HTML, CSS, and JavaScript, so no build step is needed.

## How to Update the Website

### Change the current event

Open `event-data.js` and edit the `featuredEvent` values near the top. Set `active: true` when you have an event to display and `active: false` when there is no featured event. Update the date, time, location, address, description, and attending kittens there. The address automatically links to a Google Maps search. The October 3, 2026 event is currently marked inactive because that date has passed.

### Add or remove hero photos

Put your own photos in `assets/hero/`. Open `script.js` and add each filename to the `HERO_PHOTOS` list near the top, such as `"photo1.jpg"`. Remove a filename from that list to stop showing that photo. With an empty list, the homepage displays a placeholder.

### Update regular adoption locations

In `event-data.js`, edit the `regularSchedule.locations` list. Change a location's name, weekend timing, or days there. Set `regularSchedule.active` to `false` to hide the section.

### Change special-event notices

In `event-data.js`, set `specialEvent.active` to `true` and update its title, description, location, date, time, and address. Set it to `false` to hide the panel completely. The October safety notice is in `octoberNotice`; set its `active` value to `false` when it no longer applies.

### Update social links

In `index.html`, find the Instagram and Facebook links inside the `social-buttons` area and change their `href` addresses.

### Add kitten information and photos

Open `kitten-data.js` and add one object inside `window.PAWS_KITTENS` for each kitten. Use the existing Diego and Valentina entries as examples. Put kitten photos in `assets/kittens/`, then add paths such as `assets/kittens/diego-main.jpg` to the kitten's `image` and `photos` fields. The homepage uses `image`; the profile template uses `photos` (up to four images).

Set `profileUrl` to `kittens/profile-template.html?id=your-kitten-id` to link the homepage card to the reusable profile page. Copy `kittens/profile-template.html` when you eventually want a separate named HTML page for a kitten, and keep that kitten's details in `kitten-data.js`. Empty optional fields are hidden automatically. Enter birthdays as `YYYY-MM-DD` so age can be calculated.

### Update the About story

Open `script.js` and find the `ABOUT STORY — EDIT HERE` block near the top. Its paragraphs and litter totals are kept together there.

### Add your logo

Add your real logo as `assets/logo.jpg`. The header will use it automatically; until it is present, the original P mark remains visible. No placeholder or generated image is included.

## Main Files

- `index.html` — homepage sections and social links
- `style.css` — existing visual design and responsive styles
- `script.js` — carousels, navigation, homepage rendering, and About story
- `kitten-data.js` — homepage kitten cards and future profile details
- `event-data.js` — featured event, regular schedule, and optional notices
- `kittens/profile-template.html` — reusable kitten profile layout
