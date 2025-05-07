let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//Menu icons click response
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle('active');
}

//Add Back-to-top function
const goTopBtn = document.getElementById("go-to-top");
window.onscroll = function()
{
    scrollFunction()
};
function scrollFunction()
{
    if (document.body.scrollTop > 400 || 
        document.documentElement.scrollTop > 400)
    {
        goTopBtn.style.display = "flex";
    }
    else
    {
        goTopBtn.style.display = "none";
    }
}
//When the icon clicked, it returns to the top
goTopBtn.onclick = () =>
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Job title animation (Typed style)
var typed = new Typed(".text", {
    strings: ["Software Developer", 
              "Web Developer", 
              "Test Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});