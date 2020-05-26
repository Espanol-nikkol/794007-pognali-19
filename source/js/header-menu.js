(function () {
  let sloganHeader = document.querySelector(".slogan--header");
  let nav = document.querySelector(".nav");
  let buttonOpenMenu = nav.children[0];
  let navList = nav.children[1];
  let buttonHeaderReg = nav.children[2];
  let contactListHeader = nav.children[3];
  let socialListHeader = nav.children[4];
  let headerMenu = document.querySelector(".header");


  window.toggleScrollMenu = function () {
    if (window.scrollY > 0 && !headerMenu.classList.contains("header--scroll")) {
      headerMenu.classList.add("header--scroll");
    } else if (window.scrollY === 0 && headerMenu.classList.contains("header--scroll")) {
      headerMenu.classList.remove("header--scroll");
    }
  }

  window.toggleOpenMenu = function () {
    sloganHeader.classList.toggle("slogan--header-open");
    nav.classList.toggle("nav--open");
    buttonOpenMenu.classList.toggle("nav__open--open");
    navList.classList.toggle("nav__list--open");
    buttonHeaderReg.classList.toggle("btn--header-open");
    contactListHeader.classList.toggle("contact--header-open");
    socialListHeader.classList.toggle("social-list--header-open");
  }

})();
