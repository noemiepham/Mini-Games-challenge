let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let message;
function messageFucntion () {
     if (randomNumber1 === randomNumber2) {
          return message = 'Your are equa'
     } else if (randomNumber1 > randomNumber2) {
          return message = 'Player 1 win'
     } else {
          message = ' Player 2 win'
     }
     return message;
}


document.querySelector('.img1').setAttribute("src", `images/dice${randomNumber1}.png`); 
document.querySelector('.img2').setAttribute("src", `images/dice${randomNumber2}.png`);
document.getElementById('text').innerHTML = messageFucntion();
