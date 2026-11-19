# For Nancy — memory and apology website

This version contains 16 pages:
- Page 1: cover photo
- Pages 2, 5, 7 and 9: four individual photo memories
- Pages 3, 4, 6, 8 and 10–15: ten individual video memories
- Page 16: text-only apology and promise (no photo or video)

## Add exactly 5 photos
Put these files in `images/`:
- `cover.jpg` — the fifth image / cover photo (choose the photo you want Nancy to see first)
- `memory-01.jpg` — Varkala
- `memory-02.jpg` — your night meet
- `memory-03.jpg` — last meet at the train
- `memory-04.jpg` — night meet / the moment your eyes spoke

## Add exactly 10 videos
Put these MP4 files in `videos/`. Each clip should be about 2 seconds:
- `clip-01.mp4` — not yet described; use the clip you want as the first video memory
- `clip-02.mp4` — Varkala
- `clip-03.mp4` — her driving while you sit behind
- `clip-04.mp4` — an outing together
- `clip-05.mp4` — Funtura
- `clip-06.mp4` — your outings
- `clip-07.mp4` — the two of you hiding your faces shyly
- `clip-08.mp4` — happiness together while out
- `clip-09.mp4` — the happiest ride of your life
- `clip-10.mp4` — the two of you together

## Important media notes
- Use the exact filenames above, including lowercase letters and hyphens.
- Use MP4 (H.264 video + AAC audio) for best mobile compatibility.
- Videos are set to autoplay muted, loop and play inline. Browsers may still block autoplay in some circumstances; tapping play will start them.
- To hear audio, Nancy can unmute the video using its controls.
- Photos and videos use `object-fit: contain` and preserve their proportions. Nothing is stretched or cropped.
- The site does not include your personal media. Add your own files to the folders before uploading.

## Publish with GitHub Pages
Upload the contents of this folder to the repository root so `index.html` is directly at the top level. In GitHub, choose Settings → Pages → Deploy from a branch → `main` → `/(root)`.

## Privacy
A public repository and GitHub Pages site can be viewed by anyone with the URL. Upload only media that both people are comfortable sharing.


## Final-page response buttons
The final page (page16.html) contains four response buttons connected to the Google Form supplied by the site owner. The selected answer is submitted in a hidden iframe, so the visitor stays on the apology website. The page tells the visitor that the selection will be shared with Kuttu. Google Forms does not provide this page with a readable cross-origin submission receipt, so test all four choices in the published site and confirm they appear in the form's Responses tab before sharing the website. Do not treat the on-page thank-you message as proof that Google recorded the response.

A “Start from the beginning” link is included in the navigation on pages 2–16.
