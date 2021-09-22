const countDownClockss = (number = 100, format = "seconds") => {
    const d = document;
    const minutesElement = d.querySelector(".popup-minute");
    const secondsElement = d.querySelector(".popup-second");
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
  
  countDownClockss(30, "minutes");