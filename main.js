const header = document.querySelector("header");

window.addEventListener("scroll", function () { 
    header.classList.toggle("sticky", window.scrollY > 0);
});


const navlinks = document.getElementById("navlinks");
const menuBar = document.getElementById("menu-bar");

    menuBar.addEventListener("click", ()=>{
        navlinks.classList.toggle("navlinks-active");
    })