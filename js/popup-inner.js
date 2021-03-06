var buyLink = document.querySelectorAll(".buy");
var inBasketPopup = document.querySelector(".modal-in-basket");
var continueButton = inBasketPopup.querySelector(".button-continue");
var basketClose = inBasketPopup.querySelector(".modal-close");

buyLink.forEach(function(element) {
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    inBasketPopup.classList.add("modal-show");
  });
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  inBasketPopup.classList.remove("modal-show");
});

continueButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  inBasketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (inBasketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      inBasketPopup.classList.remove("modal-show");
    }
  }
});