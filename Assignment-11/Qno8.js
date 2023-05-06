 //8. Write a JavaScript program to create a Clock.   

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"

function clock() { // user-defined
    // Get the current date and time
    var now = new Date();  // built-in function
  
    // Extract hours, minutes, and seconds from the date object
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add a leading zero to single-digit hours, minutes, and seconds
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Build the clock string in the format HH:MM:SS
    var clockStr = hours + ":" + minutes + ":" + seconds;
  
    // Log the clock string to the console
    console.log(clockStr);
  }
  clock()
  
  
 