/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const arr = string.split()
  const time = parseInt(arr[0], 10)
  console.log(arr[0])
  if(time <= 12) {
    return "Good Morning";
  } else if(time >= 12 && time <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  console.log(string)
  const greet = document.querySelector("#greeting");
  greet.innerText = string;
}