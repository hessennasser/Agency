const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav");
const navLink = document.getElementsByClassName("nav-link");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
});
function myFunction() {
    var element = document.getElementsByClassName("nav-link");
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}
