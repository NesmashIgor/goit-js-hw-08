import Player from '@vimeo/player';
import throttle  from 'lodash.throttle'


const idPlayer = new Player('vimeo-player');


const onPlay = function (data) {
   localStorage.setItem('videoplayer-current-time', data.seconds);
};

let throttled = throttle(onPlay, 1000)


idPlayer.on('timeupdate', throttled);

let timeStopVideo = Number(localStorage.getItem('videoplayer-current-time'));

idPlayer.setCurrentTime(timeStopVideo)
