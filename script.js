document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('a[download]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add download functionality here
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add form submission functionality here
    });
});

/*** 
 * // banner
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);

 */


/**
 * const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    this.classList.toggle('active');
});
 */
//menu


var element=document.getElementByClass("menu");
function toggleDisplay(){
    if(element.style.display == "none"){
        element.style.display="block";
    } 
    else{
        element.style.display="none";
    }}

//add event listener to button
document.getElementByClass("menu-toggle").addEventListener("click", toggleDisplay());