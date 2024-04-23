// RESPONSIVE NAV

const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const navList = document.querySelector('.navlist');
const overlay = document.querySelector('.overlay');


menuIcon.addEventListener('click', () => {
    toggleMenu();
});

closeIcon.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
    toggleIcons();
}

function toggleIcons() {
    menuIcon.classList.toggle('hamburger');
    menuIcon.classList.toggle('close');
    closeIcon.classList.toggle('close');
    closeIcon.classList.toggle('hamburger');
}
