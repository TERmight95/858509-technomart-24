var link = document.querySelector(".letter-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var comment = popup.querySelector("textarea");

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var buyLink = document.querySelectorAll(".buy");
var inBasketPopup = document.querySelector(".modal-in-basket");
var continueButton = inBasketPopup.querySelector(".button-continue");
var basketClose = inBasketPopup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();    
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email || !comment) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

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
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (inBasketPopup.classList.contains("modal-show")) {
      inBasketPopup.classList.remove("modal-show");
    }
  }
});