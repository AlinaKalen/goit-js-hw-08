
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

let TIMESTAMP_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(TIMESTAMP_KEY))

player.on('timeupdate', throttle(function(event) {
    localStorage.setItem(TIMESTAMP_KEY, event.seconds);
}, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});