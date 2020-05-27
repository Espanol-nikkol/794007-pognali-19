'use strict';

(function () {
  let newCountryItem = document.querySelector(".route-list__item--choice");
  let newCountryInput = newCountryItem.children[0].children[0];
  let newCountryFlag = newCountryItem.children[1];
  let wrapperFlagMenu = newCountryItem.children[2];
  let flagMenu = wrapperFlagMenu.children[0];
  let routePlanCzech = document.querySelectorAll(".route-list__plan")[1];
  let buttonOpenMenu = document.querySelector(".nav").children[0];
  let btnPhoto = document.querySelector(".btn--me");

  let toggleCountryMenu = function () {
    newCountryItem.classList.toggle("route-list__item--open");
    newCountryInput.classList.toggle("route-list__country--open");
    newCountryFlag.classList.toggle("route-list__wrapper-flag--open");
    wrapperFlagMenu.classList.toggle("route-list__wrapper-dict--open");
    flagMenu.classList.toggle("country-dict--form-active");
  };

  let changeTextRoutePlanCzech = function () {
    if (routePlanCzech.value === `Пить пиво и лазить
по старым замкам, наслаждаться архитектурой
и вот это все.` ||
      routePlanCzech.value === `Пить пиво и лазить по старым замкам,
наслаждаться архитектурой и вот это все.` ||
      routePlanCzech.value === `Пить пиво и лазить по старым замкам, наслаждаться архитектурой и вот это все.`) {
      if (window.innerWidth < 768) {
        routePlanCzech.value = `Пить пиво и лазить
по старым замкам, наслаждаться архитектурой
и вот это все.`
      } else if (window.innerWidth > 1439) {
        routePlanCzech.value = `Пить пиво и лазить по старым замкам, наслаждаться архитектурой и вот это все.`
      } else {
        routePlanCzech.value = `Пить пиво и лазить по старым замкам,
наслаждаться архитектурой и вот это все.`
      }
    }
  };

  let changeTextPhotoBtn = function () {
    if (window.innerWidth >= 1440 && btnPhoto.textContent === "Сменить фото") {
      btnPhoto.textContent = "Фото";
    } else if (window.innerWidth < 1440 && btnPhoto.textContent === "Фото") {
      btnPhoto.textContent = "Сменить фото";
    }
  }

  changeTextRoutePlanCzech();
  changeTextPhotoBtn();

  newCountryInput.addEventListener("click", toggleCountryMenu);
  window.addEventListener("resize", changeTextRoutePlanCzech);
  window.addEventListener("resize", changeTextPhotoBtn);
  window.addEventListener("scroll", window.toggleScrollMenu);
  buttonOpenMenu.addEventListener("click", window.toggleOpenMenu);
}) ();
