(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    if (document.hidden) return;
    const h = document.createElement('span');
    h.className = 'heart'; h.textContent = Math.random() > .5 ? '♡' : '♥';
    h.style.left = Math.random()*100+'vw'; h.style.fontSize=(14+Math.random()*14)+'px';
    document.body.appendChild(h); setTimeout(()=>h.remove(),5100);
  }, 1500);
})();
function reply(kind){
 const el=document.getElementById('reply');
 const messages={
  talk:"Thank you for being open to talking. We can take it slowly. I'll listen, and I won't pressure you for an answer.",
  time:"Of course. Take the time you need. I won't keep messaging or calling for an answer. When you're ready, you can reach out.",
  decision:"Thank you for being honest with me. I'll listen and respect what you want to say, even if it is difficult for me."
 };
 el.textContent=messages[kind];el.classList.add('show');
}

// Try to start every short memory clip as soon as its page is opened.
document.querySelectorAll('video[autoplay]').forEach((video) => {
  video.muted = true;
  const start = () => {
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
  };
  start();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) start();
  });
});
