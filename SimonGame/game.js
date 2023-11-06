let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
     let randomNumber = Math.floor(Math.random() * 4);
     let randomChosenColour = buttonColours[randomNumber];
     console.log(randomChosenColour);
     
     gamePattern.push(randomChosenColour);


     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

     let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
     audio.play();

     $("#" + randomChosenColour).click((event) => {
          let userChosenColour = this.event;
          console.log(userChosenColour);

     })

     userClickedPattern.push(userChosenColour);
}

nextSequence();

