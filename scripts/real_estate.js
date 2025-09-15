// opening and closing the head scrollbar using javascript code on windows
const header = document.querySelector(".header");
const backTopBtn = document.querySelector(".back-top-btn");

const activeElementOnScroll = function(){
  if(window.scrollY > 100){
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

// Opening and closing the navbar
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggle-btn");
const overLay = document.querySelector(".overlay");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle('active');
  overLay.classList.add('active');
});

overLay.addEventListener("click", () => {
  navbar.classList.remove('active');
  overLay.classList.remove('active');
});

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