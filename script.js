// Gentle decorative behavior only. Videos are muted to support autoplay policies.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.muted = true;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  });
});
