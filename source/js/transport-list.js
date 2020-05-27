'use strict';

(function () {
  let transports = document.querySelectorAll(".transport-list__item");
  transports.forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("transport-list__item--active");
    })
  })
}) ();
