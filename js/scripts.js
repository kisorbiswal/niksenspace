document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');

    // Set initial volume
    audio.volume = 0.1;

    // Mute/Unmute functionality
    muteButton.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false;
            muteButton.textContent = '🔊 Mute';
        } else {
            audio.muted = true;
            muteButton.textContent = '🔇 Unmute';
        }
    });
});
