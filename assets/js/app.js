// SCROLL BUTTON
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// nav burger menu
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// close burger menu when link selected
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

function recursiveAnimateTitle(string) {
    let firstLetter = string[0];
    let title = document.querySelector('title');
    title.innerHTML += firstLetter;
    if (string.length > 1) {
      setTimeout(function() {
        recursiveAnimateTitle(string.substring(1));
      }, 100);
    }
  }
  
  function animateTitle(string) {
    document.querySelector('title').innerHTML = "";
    recursiveAnimateTitle(string);
  }
  
  animateTitle('ruisu ~ portfolio!');