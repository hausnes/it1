const player = document.getElementById("player")

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  let kjelde = id;
  let lenke = "https://www.youtube.com/embed/" + kjelde + "?autoplay=1";
  player.src = lenke;
}