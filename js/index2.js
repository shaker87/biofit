const card_popup = document.querySelector(".card-popup");
const close_btn = document.querySelector(".close");
const current_btn = document.querySelector(".current-page");
const overlay = document.querySelector(".overlay");
const overlay_show = document.querySelector(".overlay-show");

window.addEventListener("load", function () {
  popupShow(20000);
});

function popupShow(time) {
  setTimeout(function () {
    card_popup.classList.add("show");
    overlay.classList.add("overlay-show");
  }, time);
}

close_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");

});

current_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
  
});

document.addEventListener("click", function () {
  card_popup.classList.remove("show");
  overlay.classList.remove("overlay-show");
  
});

const click_dialog_bottom = document.querySelector(".bottom-popup-box");
const dialog_box = document.querySelector(".dialog-box");
const close_icon = document.querySelector(".close-icon");
const overlay1 = document.querySelector(".overlay1");
const overlay_show1 = document.querySelector(".overlay-show1");
click_dialog_bottom.addEventListener("click", function(){
  dialog_box.classList.add("show-dialog-box");
  overlay1.classList.add("overlay-show1");
})

close_icon.addEventListener("click", function(){
  dialog_box.classList.remove("show-dialog-box");
  overlay1.classList.remove("overlay-show1");
})

const countDownClocks = (number = 100, format = "seconds") => {
  const d = document;
  const minutesElement = d.querySelector(".popup-minutes");
  const secondsElement = d.querySelector(".popup-seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

countDownClocks(30, "minutes");
