/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  let number = parseInt(time);
    if (number < 12){
      return 'Good Morning'
    } else if (number >= 17){
      return 'Good Evening'
    }
    else{
      return 'Good Afternoon'
    }
}

function displayMessage(string){
  let greeting = document.querySelector('h1#greeting')
  greeting.innerText = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
