const countDownClock = (number = 100, format = 'seconds') => {
  
    const d = document;
 
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
    
    
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);
                 
      }
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {
     
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        //console.log(`second`, Math.floor(seconds / 86400))
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
  countDownClock(20, 'hours');

  $(document).ready(function() {
    

	var countdown = 30 * 60 * 1000;
	var timerId = setInterval(function(){
	  countdown -= 1000;
	  var min = Math.floor(countdown / (60 * 1000));
	  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
	  if (countdown <= 0) {
	     clearInterval(timerId);
	  } else {
        if (min < 10) {
            $('.minute h2').text("0" + min)
        } else {
            $('.minute h2').text(min)
        }
        if (sec < 10) {
            $('.second h2').text("0" + sec)
        } else {
            $('.second h2').text(sec)
        }
	  }
	}, 1000);

	



   
});