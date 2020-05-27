'use strict';

(function () {
  let filterCountry = document.querySelector(".filter-country");
  let filterCountryWrapper = filterCountry.children[0];
  let subheadFilterCountry = filterCountryWrapper.children[0];
  let filterWorld = filterCountryWrapper.children[1];
  let buttonClose = filterCountryWrapper.children[3];
  let subheadsFilterCompany = document.querySelectorAll(".subhead--sub");
  let buttonOpenMenu = document.querySelector(".nav").children[0];
  let headsFilterCompanion = document.querySelectorAll(".subhead--sub");


  let changeSubheadsFilterCompany = function () {
    if (768 < window.innerWidth && window.innerWidth < 1440) {
      if (subheadsFilterCompany[0].textContent === "Хобби") {
        subheadsFilterCompany.forEach((x) => x.textContent = x.textContent + ":")
      }
    } else {
      if (subheadsFilterCompany[0].textContent === "Хобби:") {
        subheadsFilterCompany.forEach((x) => x.textContent = x.textContent.slice(0, -1))
      }
    }
  };

  changeSubheadsFilterCompany();

  window.addEventListener("resize", changeSubheadsFilterCompany);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      document.querySelectorAll(".filter-companion__item--open").
      forEach((el) => el.classList.remove("filter-companion__item--open"));
    }
  });

  window.addEventListener("scroll", window.toggleScrollMenu);
  buttonOpenMenu.addEventListener("click", window.toggleOpenMenu);
  headsFilterCompanion.forEach((el) => {
    el.addEventListener("click", evt => {
      if (window.innerWidth < 768 || window.innerWidth > 1439) {
        evt.path[1].classList.toggle("filter-companion__item--open");
      }
    })
  })
})();
