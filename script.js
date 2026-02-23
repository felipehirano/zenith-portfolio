// ===============================
// HEADER SCROLL
// ===============================

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

}

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const delay = entry.target.dataset.delay || 0;

      setTimeout(() => {
        entry.target.classList.add("active");
      }, delay * 120);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// ===============================
// TEXT REAL FOLLOW CURSOR
// ===============================
const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {

  const overlayContent = tile.querySelector(".overlay-content");
  if (!overlayContent) return;

  tile.addEventListener("mousemove", (e) => {

    const rect = tile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offset = 20;

    overlayContent.style.transform =
      `translate(${x + offset}px, ${y + offset}px)`;

  });
});