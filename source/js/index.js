'use strict';

(function () {
  let buttonOpenMenu = document.querySelector(".nav").children[0];
  let btnOffer = document.querySelector(".btn--offer");
  let offerMenu = document.querySelector(".offer__popup");

  let toggleOpenOffer = function() {
    offerMenu.classList.toggle("offer__popup--open");
  };

  buttonOpenMenu.addEventListener("click", window.toggleOpenMenu);
  btnOffer.addEventListener("click", toggleOpenOffer);
  document.querySelector(".btn--popup").addEventListener("click", toggleOpenOffer)
  window.addEventListener("scroll", window.toggleScrollMenu);
})();
