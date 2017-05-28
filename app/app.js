const RADIO_URL = 'http://ice1.somafm.com/dronezone-256-mp3';
let audio = document.querySelector('audio');
let play = () => audio.play();

audio.src = RADIO_URL;

document.body.addEventListener('touchstart', play);
play();