import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const parsedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    
player.on('timeupdate', throttle(savedTime, 1000));

function savedTime({ seconds }) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

if (parsedTime) {
    player.setCurrentTime(parsedTime);
};