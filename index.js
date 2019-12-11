/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg
}

function greet(timeStr) {
  const hour = parseInt(timeStr)

  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon"
  } else if (hour > 17) {
    return "Good Evening"
  }
}

// console.log(greet('8:40'))
