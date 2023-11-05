## Drum game
### Use addEventListener
addEventListener("keypress", (event) => {});
*
onkeypress = (event) => {};

### How to play sound
function PlaySound(nameSound) {
  let audio = new Audio();
  audio.src = `sounds/${nameSound}`;
  audio.play()
}

