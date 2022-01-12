function AutoPlay() {
    AutoPlay.prototype.run = function (player) {
        console.log('Autoplay');
        player.mute();
        player.play();
    }

}

export default AutoPlay;