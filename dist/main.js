const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".btn--menu");
const closeMenuBtn = document.querySelector(".btn--close");

menuBtn.addEventListener("click", (e) => {
    console.log("Open menu");
    e.preventDefault();
    nav.classList.add("open");
    overlay.classList.add("open");
});

closeMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("open");
    overlay.classList.remove("open");
})