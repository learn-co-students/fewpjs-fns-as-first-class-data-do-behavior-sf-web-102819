/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(string){
  let time = parseInt(string);
  
  if (time < 12){
  return "Good Morning"};
  if (12 <= time && time <= 17 ){
    return "Good Afternoon"
  };
  if (time > 17){
    return "Good Evening"
  };
}

function displayMessage(string){
  let greeting = document.getElementById("greeting");
  greeting.innerText = string
}


/* Write your implementation of displayMessage() */
