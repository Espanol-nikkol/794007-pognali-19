'use strict';

(function () {
  let WORLD_DICT = {
    'Европа':
      {"at": true, "be": true, "gb": true, "de": true, "ie": true, "li": true, "lu": true, "nl": true, "fr": true,
        "sh": true, "by": true, "bg": true, "hu": true, "pl": true, "ru": true, "ro": true, "sk": true, "cz": true,
        "ua": true, "dk": true, "is": true, "lv": true, "lt": true, "no": true, "ji": true, "ee": true, "se": true,
        "al": true, "ad": true, "ba": true, "gr": true, "es": true, "it": true, "mt": true, "pt": true, "sm": true,
        "rs": true, "si": true, "hr": true, "me": true},
    'Азия':
      {"az": true, "am": true, "bh": true, "ge": true, "il": true, "jo": true, "iq": true, "ir": true, "qa": true,
        "cy": true, "lb": true, "ae": true, "om": true, "sa": true, "sy": true, "tr": true, "kz": true, "kg": true,
        "tj": true, "tm": true, "uz": true, "af": true, "bd": true, "bt": true, "in": true, "mv": true, "np": true,
        "pk": true, "lk": true, "cn": true, "jp": true, "ru": true, "bn": true, "vn": true, "id": true, "kh": true,
        "la": true, "my": true, "sg": true, "th": true, "tl": true, "ph":true },
    'Америка':
      {"ag": true, "bs": true, "bb": true, "bz": true, "ht": true, "gt": true, "hn": true, "gd": true, "dm": true,
        "do": true, "ca": true, "ni": true, "pa": true, "sv": true, "us": true, "tt": true, "jm": true, "ar": true,
        "bo": true, "br": true, "ve": true, "gy": true, "co": true, "py": true, "pe": true, "uy": true, "cl": true,
        "ec": true},
    'Острова':
      {"au": true, "vu": true, "fj": true, "id": true, "pg": true, "nr": true, "pw": true, "ki": true, "nz": true,
        "ws": true, "to": true, "tv": true}
  }

  let countries = document.querySelectorAll(".country-dict__country");
  let words = document.querySelectorAll(".country-dict__item");
  let worlds = document.querySelectorAll((".filter-world__item"));
  let filterCountry = document.querySelector(".filter-country");
  let filterCountryWrapper = filterCountry.children[0];
  let filterWorld = filterCountryWrapper.children[1];
  let iconShow = filterWorld.children[4];
  let subheadFilterCountry = filterCountryWrapper.children[0];
  let countryDict = filterCountryWrapper.children[2];
  let buttonClose = filterCountryWrapper.children[3];

  let changeMarginBottomCountryDict = function () {
    if (window.innerWidth < 768) {
      countryDict.style.marginBottom = `${29 + document.querySelector(".country-dict__item--active .country-dict__list").clientHeight}px`;
    } else if (768 <= innerWidth < 1440) {
      let delta = countryDict.clientHeight + 39 - document.querySelector(".country-dict__item--active .country-dict__list").clientHeight
      if (delta < 0) {
        countryDict.style.marginBottom = `${(-delta) + 39}px`;
      } else {
        countryDict.style.marginBottom = `39px`;
      }
    } else if (window.innerWidth >= 1440) {
      countryDict.style.marginBottom = "";
    }
  };
  let changeIconShow = function () {
    if (iconShow.textContent !== "Свернуть") {
      iconShow.textContent = "Свернуть";
    } else {
      iconShow.textContent = "Показать все";
    }
  }
  let toggleFilterCountry = function() {
    filterCountry.classList.toggle("filter-country--active");
    filterCountryWrapper.classList.toggle("filter-country__wrapper--active");
    subheadFilterCountry.classList.toggle("subhead--filter-country-active");
    filterWorld.classList.toggle("filter-world--active");
    countryDict.classList.toggle("country-dict--active");
    buttonClose.classList.toggle("btn--filter-country-active");
    countries.forEach(el => {
      if (el.classList.contains("visually-hidden")) {
        el.classList.remove("visually-hidden")
      }
    });
    changeMarginBottomCountryDict();
    changeIconShow();
  };

  // set of events for open/close filter of country

  subheadFilterCountry.addEventListener("click", toggleFilterCountry);
  buttonClose.addEventListener("click", () => {
    toggleFilterCountry();
  });
  iconShow.addEventListener("click", () => {
    toggleFilterCountry();
  });

  // rule of filtration of list countries for letters of the alphabet

  words.forEach(el => {
    el.addEventListener("click", () => {
      if (window.innerWidth < 1440) {
        document.querySelector(".country-dict__item--active").classList.remove("country-dict__item--active");
        el.classList.add("country-dict__item--active");
        changeMarginBottomCountryDict();
      }
    })
  });

  // rule of filtration of list countries for parts of world

  for (let i = 0; i < worlds.length-1; i++) {
    worlds[i].addEventListener("click", () => {
      document.querySelector(".filter-world__item--active").classList.remove("filter-world__item--active");
      worlds[i].classList.add("filter-world__item--active");
      countries.forEach(el => {
        if (WORLD_DICT[worlds[i].textContent][el.classList[1].slice(-2)] === undefined) {
          el.classList.add("visually-hidden")
        } else {
          el.classList.remove("visually-hidden")
        }
      })
    })
  }
}) ();
