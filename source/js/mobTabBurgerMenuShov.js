//Переменные
let menuHide = document.querySelector(".page-header__row-bottom");
let menuBurger = document.querySelector(".row-top__menu-burger");
let btnMenuOpen = document.querySelector(".menu-burger__open");
let btnMenuClose = document.querySelector(".menu-burger__close");
let hideLanguagePage = document.querySelector(".row-top__page-language__mob-tab");

menuBurger.addEventListener("click", function () {
  menuHide.classList.toggle("show");
  if(menuHide.classList.contains("show")) {
    btnMenuOpen.style.display = "none"
    btnMenuClose.style.display = "block"
    hideLanguagePage.style.display = "block"
  }else {
    btnMenuOpen.style.display = "block"
    btnMenuClose.style.display = "none"
    hideLanguagePage.style.display = "none"
  }
});


