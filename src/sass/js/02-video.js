const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('play', onPlay);

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    // currentTime
    // {
    //     duration: 61.857
    //     percent: 0.049
    //     seconds: 3.034
    // }
    player.setCurrentTime(30.456).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });