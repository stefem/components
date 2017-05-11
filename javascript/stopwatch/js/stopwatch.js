// Overview
// --------

// Users should be able to enter a duration in seconds and click a button. The stopwatch should then count this down in seconds and hundredths of seconds either until it reaches 0 or until they press the pause button.

// Onscreen furniture
// ------------------

// 1. Field to set stopwatch duration
// 2. Button to start the stopwatch
// 3. Button to stop stopwatch
// 4. Stopwatch display

// Process
// --------
// 1. Create display (can have some fun with css here)
// 2. Build timer function / class
// 3. transpose timer function / class into display (need to find best way of doing this)

var intervalID = window.setInterval(myCallback, 10);
var duration = 500;



function stopCallback(){
	clearInterval(intervalID);
}

function myCallback() {
var duration_length = duration.length;

var calc_seconds = duration / 100;
var calc_seconds = String(calc_seconds).charAt(duration.length - (duration.length - 1));

var calc_hundredths = duration; 
var calc_hundredths = String(calc_hundredths).charAt(1);

  document.getElementById("stopwatch").innerHTML = calc_seconds + ":" + calc_hundredths;
  duration --;

  if(duration < 0) {
  	stopCallback();
  }
}





