import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoEL = document.querySelector('#vimeo-player');
const player = new Player(vimeoEL);
// const throttle = require('lodash.throttle');

const onPlay = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onPlay);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
