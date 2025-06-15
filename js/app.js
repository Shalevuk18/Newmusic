
function playTrack(src) {
  const player = document.getElementById("audioPlayer");
  player.src = src;
  player.play();
}
function toggleFrequency() {
  alert("Frequency toggled (432Hz / 528Hz simulated)");
}
