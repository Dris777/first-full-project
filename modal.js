"use-strict"

let modal = document.querySelector(".modal");
let backdrop = document.querySelector(".backdrop");
let buttonOpen = document.querySelector(".hero__button");
let buttonClose = document.querySelector(".modal__close");
//let burgerOpen = document.querySelector(".burger-menu__icon-open");
//let burgerMenu = document.querySelector(".burger");
//let burgerNav = document.querySelector(".nav__list");
//let burgerAddress = document.querySelector(".header__list");
//let burgerClose = document.querySelector(".burger-menu__icon-close");
buttonOpen.addEventListener("click", function () {
    modal.classList.add("modal--open")
    backdrop.classList.add("backdrop--show")
});
buttonClose.addEventListener("click", function () {
    modal.classList.remove("modal--open")
    backdrop.classList.remove("backdrop--show")
    checkboxActive.classList.remove("modal__checkbox--active-show")
    checkbox.classList.remove("modal__checkbox--show")
});
// CHECKBOX
let checkbox = document.querySelector(".modal__checkbox");
let checkboxActive = document.querySelector(".modal__checkbox--active")
checkbox.addEventListener("click", function () {
    console.log("dsadasdas")
    checkbox.classList.add("modal__checkbox--show")
    checkboxActive.classList.add("modal__checkbox--active-show");
});
checkboxActive.addEventListener("click", function () {
    console.log("ZALUPA")
    checkboxActive.classList.remove("modal__checkbox--active-show")
    checkbox.classList.remove("modal__checkbox--show")
});

//BURGER MENU 
//burgerOpen.addEventListener("click", function () {
    burgerOpen.classList.add("burger-menu__icon-open--hide")
    burgerMenu.classList.add("burger-menu__page--open")
    burgerNav.classList.add("nav__list--show")
    burgerClose.classList.add("burger-menu__icon-close--show")
//})

// //burgerClose.addEventListener("click", function () {
//     burgerOpen.classList.toggle("burger-menu__icon-open--hide")
//     burgerMenu.classList.toggle("burger-menu__page--open")
//     burgerNav.classList.toggle("nav__list--show")
//     burgerClose.classList.toggle("burger-menu__icon-close--show")
// //})

