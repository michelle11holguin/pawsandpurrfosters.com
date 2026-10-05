[README.md](https://github.com/user-attachments/files/33066855/README.md)
# Paws & Purr Fosters

This is the static website published with GitHub Pages. It uses plain HTML, CSS, and JavaScript, so no build step is needed.

## How to Update the Website

### Change the current event

Open `event-data.js` and edit the `featuredEvent` values near the top. Set `active: true` and fill in the current weekend's location, date, time, address, description, and attending kittens. When there is no confirmed placement, leave `active: false`; the homepage displays “Coming soon” and the regular schedule. The address automatically links to Google Maps.

### Add or remove foster photos
### Add or remove foster photos

Put your own foster photos in `assets/hero/`. Open `script.js` and add each filename to the `FOSTER_CAROUSEL_PHOTOS` list near the top, such as `"photo1.jpg"`. Remove a filename from that list to stop showing that photo. With an empty list, the homepage displays a placeholder.

### Update regular adoption locations

In `event-data.js`, edit the `regularSchedule.locations` list. Change a location's name, weekend timing, days, or address there. The address itself links to a Google Maps search. The note beneath the locations is the `regularSchedule.note` value.

### Change special-event notices

In `event-data.js`, set `specialEvent.active` to `true` and update its title, description, location, date, time, and address. Set it to `false` to hide the panel completely. The October attendance notice is in `octoberNotice`; update its text or set `active` to `false` when it no longer applies.

### Update social links

In `index.html`, find the Instagram and Facebook links inside the `social-buttons` area and change their `href` addresses.

### Add kitten information and photos

Open `kitten-data.js` and add one object inside `window.PAWS_KITTENS` for each kitten. Use the existing Diego and Valentina entries as examples. Put kitten photos in `assets/kittens/`, then add paths such as `assets/kittens/diego-main.jpg` to the kitten's `image` and `photos` fields. The homepage uses `image`; the profile template uses `photos` (up to four images).

Set `profileUrl` to `kittens/profile-template.html?id=your-kitten-id` to link the homepage card to the reusable profile page. Copy `kittens/profile-template.html` when you eventually want a separate named HTML page for a kitten, and keep that kitten's details in `kitten-data.js`. Empty optional fields are hidden automatically. Enter birthdays as `YYYY-MM-DD` so age can be calculated.

### Update the About story

Open `script.js` and find the `ABOUT STORY — EDIT HERE` block near the top. Its paragraphs are kept together there.

### Update How to Adopt information

The adoption steps are in `how-to-adopt.html`. To update the rescue name, official website, Petfinder link, or application instructions, edit the clearly labeled values in `adoption-data.js`. Leave a link blank to omit it from the page.

### Add your logo

The real logo is stored at `assets/logo.jpg` and is used in the homepage and kitten-profile headers. Replace that file if the logo changes.

## Main Files

- `index.html` — homepage sections and social links
- `style.css` — existing visual design and responsive styles
- `script.js` — carousels, navigation, homepage rendering, and About story
- `kitten-data.js` — homepage kitten cards and future profile details
- `event-data.js` — featured event, regular schedule, and optional notices
- `how-to-adopt.html` and `adoption-data.js` — adoption steps and editable rescue information
- `kittens/profile-template.html` — reusable kitten profile layout
