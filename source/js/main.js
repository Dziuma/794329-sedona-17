var form = document.querySelector(".form");
var name = document.querySelector("#name-field");
var surename = document.querySelector("#surname-field");
var tel = document.querySelector("#phone-field");
var email = document.querySelector("#email-field");
var popupFailure = document.querySelector(".failure-popup");
var popupSuccess = document.querySelector(".success-popup");
var closePopupFailure = document.querySelector(".button--failure-close");
var closePopupSuccess = document.querySelector(".button--success-close");
var overlay = document.querySelector(".overlay");

form.addEventListener("submit", function (evt) {
    if (!name.value || !surename.value || !tel.value || !email.value) {
        evt.preventDefault();
        popupFailure.classList.add("modal-show");
        overlay.style.display = "block";
    } else {
        evt.preventDefault();
        popupSuccess.classList.add("modal-show");
        overlay.style.display = "block";
    }
});

closePopupFailure.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFailure.classList.remove("modal-show");
    overlay.style.display = "none";
});

closePopupSuccess.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSuccess.classList.remove("modal-show");
    overlay.style.display = "none";
})

overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    popupSuccess.classList.remove("modal-show");
    popupFailure.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFailure.classList.contains("modal-show")) {
        popupFailure.classList.remove("modal-show");
    overlay.style.display = "none";
      }
    }
  });