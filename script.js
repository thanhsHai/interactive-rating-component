"use strict";

const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

const frontCard = document.querySelector(".front");
const backCard = document.querySelector(".back");

const rateLevel = document.querySelector(".rate-level");

let isChecked = false;
let rate = 0;

for (const ratingBtn of ratingBtns) {
  ratingBtn.addEventListener("click", () => {
    isChecked = true;
    rate = ratingBtn.textContent;
  });
}

const handleSubmitBtnClick = function () {
  if (isChecked) {
    frontCard.classList.add("animate-zoomOut");

    setTimeout(() => {
      frontCard.classList.add("hidden");
      backCard.classList.remove("hidden");
      rateLevel.textContent = rate;
    }, 300);
  }
};

submitBtn.addEventListener("click", handleSubmitBtnClick);
