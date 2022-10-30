'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    if(window.scrollY >navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {  
    const target = event.target;
    const link = target.dataset.link;
    if(link == null ){
        return;
    }
    scrollIntoView(link);
    
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//Make home slowly fade to transparent as the window scrolls down
const about = document.querySelector('.about__container');
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    about.style.opacity = 1-scrollY/aboutHeight;
})
