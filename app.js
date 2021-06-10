const navBurger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav__links');
let burger = false;

window.addEventListener('resize', () => {
    if (window.screen.height >= 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
})



navBurger.addEventListener('click', () => {
    burger = !burger;
    navBurger.attributes.src.value = burger ? 'images/icon-close.svg' : 'images/icon-hamburger.svg';
    console.log('clikv');
    navLinks.style.display = burger ? 'flex' : 'none';
    navLinks.classList.toggle('nav__toggle');
})

