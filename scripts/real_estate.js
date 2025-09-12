// opening and closing the head scrollbar using javascript code on windows
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// Opening and closing the navbar
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggle-btn");
navToggler.addEventListener("click", () => navbar.classList.toggle('active'));

// changing the image of heart blinker
document.addEventListener("DOMContentLoaded", function(){
  // Get all like buttons
  const favBtn = document.querySelectorAll(".fav-btn");
  // Images of heart stored in variables
  const heartOutline = "./assets/images/red-outline-heart.png";
  const heartFilled = "./assets/images/red-filled-heart.png";

  // adding click event to each button 
  favBtn.forEach(btn => {
    // setting initial state from localStorage if available
    const card = btn.closest(".card");
    const cardId = Array.from(document.querySelectorAll(".card")).indexOf(card);
    const isLiked = localStorage.getItem(`card-${cardId}-liked`) === "true"; 

    if(isLiked){
      btn.querySelector(".heart-blinker").src = heartFilled;
      btn.classList.add("liked");
    }

    btn.addEventListener("click", function(){
      const heartIcon = this.querySelector(".heart-blinker");
      const isCurrentlyLiked = this.classList.contains("liked");

      if(isCurrentlyLiked){
        // unlike the card
        heartIcon.src = heartOutline;
        this.classList.remove("liked");
        localStorage.setItem(`card-${cardId}-liked`, "false");
      }else{
        // like the card
        heartIcon.src = heartFilled;
        this.classList.add("liked");
        localStorage.setItem(`card-${cardId}-liked`, "true");
      }
    });
  });
});