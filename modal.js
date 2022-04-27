"use-strict"

let modal = document.querySelector(".modal");
let backdrop = document.querySelector(".backdrop");
let buttonOpen = document.querySelector(".hero__button");
let buttonClose = document.querySelector(".modal__close");
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

    checkbox.classList.add("modal__checkbox--show")
    checkboxActive.classList.add("modal__checkbox--active-show");
});
checkboxActive.addEventListener("click", function () {
    
    checkboxActive.classList.remove("modal__checkbox--active-show")
    checkbox.classList.remove("modal__checkbox--show")
});
