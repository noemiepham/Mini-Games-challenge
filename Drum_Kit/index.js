const btn = document.querySelectorAll('.drum');

function PlaySound(nameSound) {
  let audio = new Audio();
  audio.src = `sounds/${nameSound}`;
  audio.play()
}
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {

    let buttonInnerHtml = this.innerHTML
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml)
  });
}

document.addEventListener('keypress', function(event) {
     //console.log(event.key);
     makeSound(event.key)
     buttonAnimation(event.key)
})

function makeSound(key) {
     switch (key) {
          case "w":
            PlaySound('tom-1.mp3');
            break;
          case "a":
            PlaySound('tom-2.mp3');
            break;
          case "s":
            PlaySound('tom-3.mp3');
            break;
          case "d":
            PlaySound('tom-4.mp3');
            break;
          case "j":
            PlaySound('snare.mp3');
            break;
          case "k":
            PlaySound('crash.mp3');
            break;
          case "l":
            PlaySound('kick-bass.mp3');
            break;
    
          default:
        }
}

function buttonAnimation(currentkey) {

     let activeButton = document.querySelector("." + currentkey);
     console.log(activeButton);
     activeButton.classList.add('pressed')
     setTimeout(function() {
          activeButton.classList.remove('pressed');}, 100);
}