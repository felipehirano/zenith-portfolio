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
// TILE FOLLOW CURSOR
// ===============================

const projectTiles = document.querySelectorAll(".tile");

projectTiles.forEach(tile => {

  tile.addEventListener("mousemove", (e) => {

    const rect = tile.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) * 0.1;
    const moveY = (y - centerY) * 0.1;

    tile.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  tile.addEventListener("mouseleave", () => {
    tile.style.transform = `translate(0, 0)`;
  });

});