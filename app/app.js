const RADIO_URL = 'http://ice1.somafm.com/dronezone-256-mp3';
const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-mask');

function play () {
  playButton.style.display = 'none';
  audio.play();
}

audio.src = RADIO_URL;

document.body.addEventListener('touchstart', play);
document.body.addEventListener('click', play);