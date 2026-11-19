// Gentle decorative behavior only. Videos are muted to support autoplay policies.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.muted = true;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  });
});


// Send the selected response to Google Forms without leaving this page.
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-response]");
  const status = document.getElementById("response-status");
  if (!buttons.length || !status) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.dataset.response;
      buttons.forEach((item) => { item.disabled = true; });
      status.textContent = "Thank you for sharing your choice. Sending it now… ♡";

      let frame = document.getElementById("google-form-submit-frame");
      if (!frame) {
        frame = document.createElement("iframe");
        frame.name = "google-form-submit-frame";
        frame.id = "google-form-submit-frame";
        frame.hidden = true;
        document.body.appendChild(frame);
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdBAvXewJcpOQet1lhSL1cdX60Z0m3inwzttCS0t_tJQZ0BAg/formResponse";
      form.target = frame.name;
      form.style.display = "none";
      const field = document.createElement("input");
      field.type = "hidden";
      field.name = "entry.1643910705";
      field.value = answer;
      form.appendChild(field);
      document.body.appendChild(form);
      form.submit();
      form.remove();

      status.textContent = "Thank you for sharing your choice. You can close this page whenever you're ready. ♡";
    });
  });
});
