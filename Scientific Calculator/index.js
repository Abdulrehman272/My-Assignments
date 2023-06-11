let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = '';
}
const delButton = document.getElementById('btn-1');

delButton.addEventListener('click', function () {
  result.value = result.value.slice(0, -1);
});

          // Function to perform Percentage
function calculatePercentage() {
  let result = document.getElementById("result").value;
        
  try {
  let answer = eval(result + "/100");
    document.getElementById("result").value = answer;
  } catch (error) {
  console.log("error : " + error);
  document.getElementById("result").value = "Error";
  }
}
function appendCharacter(character) {
  var display = document.getElementById("display");
  display.value += character;
}

function calculateSin() {
  document.getElementById("result").value = Math.sin(result.value).toFixed(4);
}
function calculateCos() {
  document.getElementById("result").value = Math.cos(result.value).toFixed(4);
}
function calculateTan() {
  document.getElementById("result").value = Math.tan(result.value).toFixed(4);
}
function calculateSininverse() {
  document.getElementById("result").value = Math.asin(result.value).toFixed(4);
}
function calculateCosinverse() {
  document.getElementById("result").value = Math.acos(result.value).toFixed(4);
}
function calculateTaninverse() {
  document.getElementById("result").value = Math.atan(result.value).toFixed(4);
}
function sqrRoot() {
  document.getElementById("result").value = Math.sqrt(result.value);
}
function getElementByClassName(value) {
    // Replace this with your desired functionality
    if (value === '(' || value === ')') {
      // Parentheses functionality
      console.log("Button clicked: " + value);
    } else if (value === '*') {
      // Multiplication functionality
      console.log("Multiplication clicked");
    } else {
      // Other buttons functionality
      console.log("Button clicked: " + value);
    }
  }

  
// Get references to the button and options elements
const button = document.getElementById('scientific-button');
const options = document.getElementById('scientific-options');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Toggle the visibility of the scientific options
  if (options.style.display === 'none') {
    options.style.display = 'block';
  } else {
    options.style.display = 'none';
  }
});

  // Evaluate the remaining expression
  try {
    var finalResult = eval(expression);
    display.value = finalResult;
  } catch (error) {
    console.error("Error: " + error);
  }


function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Math Error';
    console.log(error); 
  }
}