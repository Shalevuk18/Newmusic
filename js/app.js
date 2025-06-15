
function playTrack(src) {
  const player = document.getElementById("audioPlayer");
  player.src = src;
  player.play();
}
function toggleFrequency() {
  alert("Simulated switch to 432Hz/528Hz (actual processing requires backend engine).");
}
