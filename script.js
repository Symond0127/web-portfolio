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

//==========>> ACHIEVEMENTS SLIDER <<==========//

const wrapper = document.querySelector('.wrapper');
const card = document.querySelector('.achieve-card');
const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('.button');

let imageIndex = 1,
    interValId;

//Define function to start automatic image silder
const autoSlide = () => {

    //Start the slideshow by calling slideImage
    interValId = setInterval(() => slideImage(++imageIndex), 2000)
}
    //Call autoSlide function on page load
    autoSlide();

    //A function that updates the card display to show the specified image
    const slideImage = () => {

        //Calculate the updated image index
        imageIndex = imageIndex === 6 ? 0 : imageIndex < 0 ? 6 - 1 : imageIndex

        //Update the card display to show the specified image
         card.style.transform = `translate(-${imageIndex * 100}%)`

    }

    const updateClick = (e) => {

        //Stop the automatic slidesho
        clearInterval(interValId);
        imageIndex += e.target.id === "next" ? 1 : -1
        slideImage(imageIndex)
        console.log(imageIndex)
    }
    
    buttons.forEach((button) => button.addEventListener('click', updateClick))

    //Add event listeners to wrapper element to stop auto sliding
    wrapper.addEventListener('mouseover', () => clearInterval(interValId))
    wrapper.addEventListener('mouseleave', () => autoSlide())
