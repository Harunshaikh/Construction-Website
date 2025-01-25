//-------------------- TOGGLE MENU-BAR ----------------------------
let menuIcon = document.querySelector("#menu-line");
let closeIcon = document.querySelector("#close-line");
let navLinks = document.querySelector(".nav-links ul");
let main = document.querySelector(".main");
const showMenu = () => {
  navLinks.style.right = "0";
};
const hideMenu = () => {
  navLinks.style.right = "-100%";
};
menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);

// --------------------  TESTIMONIAL SWIPER ----------------------------
let widthSize = window.matchMedia("(width <= 675px)");
const MediaQuerySwiper = () => {
  if (widthSize.matches) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 1200,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 1200,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};
MediaQuerySwiper();

//-------------------------- scroll to top --------------------------------
const scrollUp = document.querySelector(".scroll-to-top ");
function topFunction() {
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
scrollUp.addEventListener(
  "click",
  (scrollUp.onscroll = function () {
    topFunction();
  })
);

// -------------------- Theme-Changer ---------------------------
const themeIcon = document.querySelector("#theme-icon");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const themeText = document.querySelector("#theme-text");

// Function to update the theme
let theme = "dark";
const updateTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark-theme");
    themeIcon.src = "image/sun.svg";
    themeText.innerText = "Light";
  } else {
    body.classList.remove("dark-theme");
    themeIcon.src = "image/moon.svg";
    themeText.innerText = "Dark";
  }
  localStorage.setItem("theme", theme); // Save the current theme
};

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme") || "light"; // Default to theme
updateTheme(savedTheme);

// Change theme on button click
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    updateTheme("light");
  } else {
    updateTheme("dark");
  }
});

