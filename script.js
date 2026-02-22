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