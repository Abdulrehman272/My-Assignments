// Write a JavaScript function to get the current date.


function getCurrentDate(separator) {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${day < 10 ? `0${day}` : `${day}`}`;
  }
  
  // Example usage:
  console.log(getCurrentDate('/')); // 2023/04/05
  console.log(getCurrentDate('-')); // 2023-04-05
  