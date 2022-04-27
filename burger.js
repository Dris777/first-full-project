"use-strict"

let burgerOpen = document.querySelector(".header__icon-open");
let burgerMenu = document.querySelector(".burger");
let burgerNav = document.querySelector(".nav__list");
let burgerAddress = document.querySelector(".header__list");
let burgerClose = document.querySelector(".header__icon-close");
let wrap = document.querySelector(".wrap");
console.log(wrap)
burgerOpen.addEventListener("click", function () {
    burgerOpen.classList.add("header__icon-open--hide")
    burgerMenu.classList.add("header__page--open")
    burgerNav.classList.add("nav__list--show")
    burgerClose.classList.add("header__icon-close--show")
    wrap.classList.add("wrap--hide")
})

burgerClose.addEventListener("click", function () {
    burgerOpen.classList.toggle("header__icon-open--hide")
    burgerMenu.classList.toggle("header__page--open")
    burgerNav.classList.toggle("nav__list--show")
    burgerClose.classList.toggle("header__icon-close--show")
    wrap.classList.toggle("wrap--hide")
})