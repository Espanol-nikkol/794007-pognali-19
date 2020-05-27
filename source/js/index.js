'use strict';

(function () {
  let buttonOpenMenu = document.querySelector(".nav").children[0];
  let btnOffer = document.querySelector(".btn--offer");
  let offerMenu = document.querySelector(".offer__popup");
  let btnReg = document.querySelector(".reg__submit");

  let toggleOpenOffer = function() {
    offerMenu.classList.toggle("offer__popup--open");
  };

  let changeTextBtnReg = function() {
    if (window.innerWidth >= 1440 && btnReg.textContent === "") {
      btnReg.textContent = "Регистрация";
    } else if (window.innerWidth < 1440 && btnReg.textContent === "Регистрация") {
      btnReg.textContent = "";
    }
  };

  changeTextBtnReg();

  buttonOpenMenu.addEventListener("click", window.toggleOpenMenu);
  btnOffer.addEventListener("click", toggleOpenOffer);
  document.querySelector(".btn--popup").addEventListener("click", toggleOpenOffer)
  window.addEventListener("scroll", window.toggleScrollMenu);
  window.addEventListener("resize", changeTextBtnReg)
})();
