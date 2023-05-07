let header = document.querySelector("header");

let navbar = document.querySelector(".navbar");

let menu = document.querySelector("#menu-icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow");
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  } else {
    header.classList.remove("shadow");
  }
});

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("bx-x");
});

//Scroll animation

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  deplay: 400,
  reset: true,
});

sr.reveal(".home-text", { deplay: 200, origin: "top" });

sr.reveal(".home-img", { deplay: 400, origin: "top" });

sr.reveal(
  ".about-title, .about-text, .heading, .box, input, textarea, .social a",
  {
    deplay: 200,
    origin: "top",
  }
);
