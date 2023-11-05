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

<a href="https://ibb.co/68VmgzR"><img src="https://i.ibb.co/Vxrt2RW/DrumPlay.jpg" alt="DrumPlay" border="0"></a>
