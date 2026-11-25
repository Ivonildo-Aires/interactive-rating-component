const assessment = document.querySelectorAll(".rating-card__score-btn");
const shipping = document.getElementById("rating-card__submit-btn");
const assessmentControl = document.querySelector(".rating-card");
const acknowledgmentControl = document.querySelector(".acknowledgment-card");
const note = document.querySelector(".acknowledgment-card__note");
let result;
assessment.forEach(function (button) {
  button.addEventListener("click", function () {
    assessment.forEach(function (button) {
      button.classList.remove("rating-card__score-btn-active");
    });

    result = button.textContent;
    button.classList.add("rating-card__score-btn-active");
  });
});
shipping.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (result !== undefined) {
    acknowledgmentControl.classList.remove("acknowledgment-hidden");
    assessmentControl.classList.add("acknowledgment-hidden");
    note.innerText = `You selected ${result} out of 5`;

  } else {
    alert("É necesasrio atribuir uma nota ");
  }
});
