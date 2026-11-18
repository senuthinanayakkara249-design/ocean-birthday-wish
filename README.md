# Ocean Birthday Surprise 🌊💙  - quick guide

## 1. Set up in VS Code
1. Unzip this folder somewhere easy (Desktop).
2. VS Code > File > Open Folder > choose `ocean-birthday-surprise`.
3. You should see: index.html, style.css, script.js and an `assets` folder.
   (If you ever start from scratch: right-click the empty sidebar > New File, name them exactly like that.)

## 2. Run it
- Easiest: install the "Live Server" extension (Extensions icon > search "Live Server" > Install),
  then right-click index.html > "Open with Live Server".
- No extension? Double-click index.html and it opens in your browser.
- Refresh the page to start over (progress is not saved on purpose, so you can test again).

## 3. Your own files (put them in `assets/`, keep the SAME names)
| File | What it is |
|---|---|
| puzzle-photo.jpg | the sliding-puzzle picture (square works best) |
| album-photo-1/2/3.jpg | the three album photos (portrait is nicest) |
| ocean-song.mp3 | the music (only use a song you have permission to use) |
| angry-bear.gif | your angry-bear gif for the wrong password (optional, a drawn bear shows if missing) |
| ocean-background.jpg | optional background photo |
Different file name/type (e.g. .png)? Just change the name in CONFIG inside script.js.

## 4. Change the words, password and quiz
Open script.js. Everything you edit is in the block at the top called CONFIG:
- `password` (numbers only, 4-8 digits) and `passwordHint`
- `nickname`, `myName`
- `loveLetter`, `birthdayLetter`, `finalSecret`
- `quiz` -> each question has 4 `options` and `correct` (0 = 1st answer, 1 = 2nd, 2 = 3rd, 3 = 4th)
- `album` captions and notes, `songTitle`
Anything in [square brackets] is a yellow placeholder: replace it, then set `highlightPlaceholders: false`.
Keep the quote marks and commas.

## 5. Troubleshooting
- Blank/unstyled page: file names must be exactly index.html, style.css, script.js in the same folder.
- Nothing happens when clicking: press F12 > Console tab and read the red message (usually a missing quote or comma in CONFIG).
- Photos missing: check the file name and extension match the CONFIG exactly (capital letters matter online).
- Music won't play: browsers need a click on Play first; check ocean-song.mp3 is in `assets`.
- Puzzle photo looks cropped: use a square photo.

## 6. Put it online so Ocean can open a link
Easiest free option: Netlify Drop. Go to app.netlify.com/drop, drag the whole `ocean-birthday-surprise`
folder onto the page, and you get a link. (GitHub Pages and Cloudflare Pages also work.)
Before sending: open the link on your phone and test everything once.
Tip: photos of you two are public to anyone with the link, so keep the link private.
