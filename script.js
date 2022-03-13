"use strict";

const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(function (button) {
  button.addEventListener("click", function () {
    // console.log(this);
    this.classList.toggle("active");

    // to close other buttons
    if (button.classList.contains("active")) {
      btn.forEach(function (button) {
        button.classList.remove("active");
      }); //else
      button.classList.toggle("active");
    }
  });
});
