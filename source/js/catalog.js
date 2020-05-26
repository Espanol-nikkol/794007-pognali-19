'use strict';

(function () {
  let filterCountry = document.querySelector(".filter-country");
  let filterCountryWrapper = filterCountry.children[0];
  let subheadFilterCountry = filterCountryWrapper.children[0];
  let filterWorld = filterCountryWrapper.children[1];
  let countryDict = filterCountryWrapper.children[2];
  let buttonClose = filterCountryWrapper.children[3];
  let subheadsFilterCompany = document.querySelectorAll(".subhead--sub");
  let buttonOpenMenu = document.querySelector(".nav").children[0];
  let headsFilterCompanion = document.querySelectorAll(".subhead--sub");


  let toggleFilterCountry = function() {
    filterCountry.classList.toggle("filter-country--active");
    filterCountryWrapper.classList.toggle("filter-country__wrapper--active");
    subheadFilterCountry.classList.toggle("subhead--filter-country-active");
    filterWorld.classList.toggle("filter-world--active");
    countryDict.classList.toggle("country-dict--active");
    buttonClose.classList.toggle("btn--filter-country-active");
  };

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

  if (window.innerWidth <= 768) {
    subheadFilterCountry.addEventListener("click", toggleFilterCountry);
  }


  filterWorld.children[4].addEventListener("click", evt => {
    if (evt.target.textContent !== "Свернуть") {
      evt.target.textContent = "Свернуть";
    } else {
      evt.target.textContent = "Показать все";
    }
    toggleFilterCountry();
  });
  buttonClose.addEventListener("click", () => {
    if (filterWorld.children[4].textContent !== "Свернуть") {
      filterWorld.children[4].textContent = "Свернуть";
    } else {
      filterWorld.children[4].textContent = "Показать все";
    }
    toggleFilterCountry();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      subheadFilterCountry.removeEventListener("click", toggleFilterCountry);
    } else {
      subheadFilterCountry.addEventListener("click", toggleFilterCountry);
    }
  });
  window.addEventListener("resize", changeSubheadsFilterCompany);
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
