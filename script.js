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


let menuToggle=document.getElementByClass('menu-toggle');
menuToggle.addEventListener('click', function()
{  
    document.getElementByClass('menu').classList.toggle('show');
});