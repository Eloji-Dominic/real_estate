// opening and closing the head scrollbar using javascript code on windows
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// Opening and closing the navbar
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggle-btn");
navToggler.addEventListener("click", () => navbar.classList.toggle('active'));