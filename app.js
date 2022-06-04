document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit-btn");
  const ratingCard = document.querySelector("#rating-state");
  const thankCard = document.querySelector("#thank-state");
  const ratingBtns = document.querySelectorAll(".rating-btn");
  const showRating = document.querySelector(".rating");

  function changeState() {
    ratingCard.classList.add("display");
    thankCard.classList.remove("display");
  }
  submit.addEventListener("click", changeState);

  function displayRating() {
    ratingBtns.forEach(function (button) {
      button.onclick = function (e) {
        let value = this.innerHTML; // get the value of the button clicked
        showRating.innerHTML = value; // display value selected in span
      };
    });
  }
  displayRating();
});
