// Create container
const container = document.createElement("div");
container.style.textAlign = "center";
container.style.padding = "60px";

// Main title
const title = document.createElement("h1");
title.textContent = "404";
title.style.fontSize = "120px";
title.style.color = "#ff4081";
title.style.margin = "0";

// Subtitle
const subtitle = document.createElement("h2");
subtitle.textContent = "Page Not Found 😕";
subtitle.style.color = "#555";
subtitle.style.marginTop = "10px";

// Description
const desc = document.createElement("p");
desc.textContent =
  "It seems like you tried to reach a page that doesn't exist.";
desc.style.color = "#777";
desc.style.fontSize = "18px";
desc.style.marginTop = "5px";

// Button
const btn = document.createElement("a");
btn.textContent = "Go Back Home";
btn.href = "index.html";
btn.style.display = "inline-block";
btn.style.marginTop = "25px";
btn.style.padding = "12px 25px";
btn.style.backgroundColor = "#ff4081";
btn.style.color = "white";
btn.style.textDecoration = "none";
btn.style.borderRadius = "25px";
btn.style.transition = "0.3s";

btn.addEventListener(
  "mouseover",
  () => (btn.style.backgroundColor = "#e73370")
);
btn.addEventListener("mouseout", () => (btn.style.backgroundColor = "#ff4081"));

// Append elements
container.appendChild(title);
container.appendChild(subtitle);
container.appendChild(desc);
container.appendChild(btn);
document.body.appendChild(container);
