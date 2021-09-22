const countDownClock = (number = 100, format = "seconds") => {
  const d = document;

  const hoursElement = d.querySelector(".hours");
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
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
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    //console.log(`second`, Math.floor(seconds / 86400))
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(4.5, "hours");


const countDownClock1 = (number = 100, format = "seconds") => {
  const d = document;

  const hoursElement = d.querySelector(".shours");
  const minutesElement = d.querySelector(".sminutes");
  const secondsElement = d.querySelector(".sseconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
      case "hours":
        return timer(number * 60 * 60);
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
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    //console.log(`second`, Math.floor(seconds / 86400))
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock1(4.5, "hours");

$(document).ready(function () {
  var countdown = 30 * 60 * 1000;
  var timerId = setInterval(function () {
    countdown -= 1000;
    var min = Math.floor(countdown / (60 * 1000));
    var sec = Math.floor((countdown - min * 60 * 1000) / 1000);
    if (countdown <= 0) {
      clearInterval(timerId);
    } else {
      if (min < 10) {
        $(".minute h2").text("0" + min);
      } else {
        $(".minute h2").text(min);
      }
      if (sec < 10) {
        $(".second h2").text("0" + sec);
      } else {
        $(".second h2").text(sec);
      }
    }
  }, 1000);
});


//pop under code

setTimeout(function () {
  var popup = window.open(
    "index1.html",
    "_blank",

    "width=" +
      window.screen.availWidth +
      ",height=" +
      window.screen.availHeight +
      ",toolbar=1,scrollbars=1,status=1,resizable=1, behavior: smooth,"
  ).blur();
  window.open().close();
  window.focus()
  return (popup)?false:true;
  
});


const play_video = document.querySelector(".what-img img");
play_video.addEventListener("click", function(){
  window.open("https://youtube.com/", "_blank");
})



// accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// bottom to top button

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
