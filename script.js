const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

document.getElementById("year").textContent = new Date().getFullYear();