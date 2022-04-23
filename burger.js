"use-strict"

let burgerOpen = document.querySelector(".burger-menu__icon-open");
let burgerMenu = document.querySelector(".burger");
let burgerNav = document.querySelector(".nav__list");
let burgerAddress = document.querySelector(".header__list");
let burgerClose = document.querySelector(".burger-menu__icon-close");
let wrap = document.querySelector(".wrap");
console.log(wrap)
burgerOpen.addEventListener("click", function () {
    burgerOpen.classList.add("burger-menu__icon-open--hide")
    burgerMenu.classList.add("burger-menu__page--open")
    burgerNav.classList.add("nav__list--show")
    burgerClose.classList.add("burger-menu__icon-close--show")
    wrap.classList.add("wrap--hide")
})

burgerClose.addEventListener("click", function () {
    burgerOpen.classList.toggle("burger-menu__icon-open--hide")
    burgerMenu.classList.toggle("burger-menu__page--open")
    burgerNav.classList.toggle("nav__list--show")
    burgerClose.classList.toggle("burger-menu__icon-close--show")
    wrap.classList.toggle("wrap--hide")
})