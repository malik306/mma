const el = document.querySelector('.nav__bar__burger');
const jumpScrollUp = document.querySelector('.scroll-y');
function ToggleMenu() {
    el.classList.toggle('nav__bar__burger--toggle');
    el.nextElementSibling.classList.toggle('nav__bar__list--toggle');
}
window.addEventListener('scroll',()=>{
    if (window.scrollY>0) {
        el.parentElement.style = `background: #00BCD4`;
        jumpScrollUp.style = `display: unset`;
    } else {
        el.parentElement.style = ``;
        jumpScrollUp.style = `display: none`;
    }
});