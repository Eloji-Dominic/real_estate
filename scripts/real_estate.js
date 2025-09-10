// opening and closing the head scrollbar using javascript code on windows
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});