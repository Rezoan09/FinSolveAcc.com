// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    const clickedInside = navLinks.contains(e.target) || navToggle.contains(e.target);
    if (!clickedInside) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mini form demo (Quick Quote)
const miniForm = document.getElementById("miniForm");
if (miniForm) {
  miniForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(miniForm);
    const tx = data.get("transactions");
    let rec = "Starter";
    if (tx === "up_to_500") rec = "Professional";
    if (tx === "unlimited") rec = "Enterprise";

    alert(`Recommendation: ${rec}\n\nNext: scroll down and send a message for a free consultation.`);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    miniForm.reset();
  });
}
