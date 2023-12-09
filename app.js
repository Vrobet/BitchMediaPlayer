document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const player = new Plyr('#player');

    // Expose player to global scope
    window.player = player;

    // Example of events
    player.on('play', event => {
        console.log('Video played');
    });

    player.on('pause', event => {
        console.log('Video paused');
    });

    player.on('ended', event => {
        console.log('Video ended');
    });

    // Event listener for file input change
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: objectURL,
                        type: 'video/mp4',
                    },
                ],
            };
            player.play();
        }
    });
});