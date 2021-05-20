const hamburgerBtn = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const scrollToTop = document.querySelector(".to-top");
const burgerCloseArea = document.querySelector(".burger-close");

const app = () => {
  stickyNav();
  hamburgerNav();
};

// sticky menu on scroll
function stickyNav() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}

// adding listeners to elements which can toggle hamburger menu
function hamburgerNav() {
  hamburgerBtn.addEventListener("click", toggleHamburger);
  scrollToTop.addEventListener("click", closeHamburger);
  burgerCloseArea.addEventListener("click", closeHamburger);
}

function toggleHamburger() {
  nav.classList.toggle("active-hamburger");
  hamburgerBtn.classList.toggle("toggle");
  burgerCloseArea.classList.toggle("active-close");
  // if hamburger is active add event listener to links to close hamburger after navigating
  if (nav.classList.contains("active-hamburger")) {
    navLinks.forEach((link) => {
      link.addEventListener("click", closeHamburger);
    });
  }
  // animating links on opening hamburger
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.4s ease-in forwards ${
        index / 4 + 0.3
      }s`;
    }
  });
}

function closeHamburger() {
  nav.classList.remove("active-hamburger");
  hamburgerBtn.classList.remove("toggle");
  burgerCloseArea.classList.remove("active-close");
  navLinks.forEach((link) => (link.style.animation = ""));
}

app();