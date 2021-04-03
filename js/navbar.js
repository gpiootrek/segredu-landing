const app = () => {
  stickyNav();
  hamburgerNav();
};

function stickyNav() {
  // sticky menu on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}
function hamburgerNav() {
  // hamburger menu
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li");

  hamburgerBtn.addEventListener("click", () => {
    // display menu
    nav.classList.toggle("active-hamburger");
    // display links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.4s ease-in forwards ${
          index / 5 + 0.4
        }s`;
      }
    });
    // change hamburger icon
    hamburgerBtn.classList.toggle('toggle');
  });
}

app();
