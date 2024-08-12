document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling with EmailJS
    document.getElementById('rsvp-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_6miidnd', 'template_ccv04cx', this)
            .then(() => alert('RSVP submitted successfully!'))
            .catch(error => alert('Error: ' + error));
    });

    document.getElementById('invite-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_6miidnd', 'template_ccv04cx', this)
            .then(() => alert('Invitation sent successfully!'))
            .catch(error => alert('Error: ' + error));
    });

    // Password check for the invitation page
    const correctPassword = 'celebrate40';
    const urlParams = new URLSearchParams(window.location.search);
    const showPasswordPrompt = urlParams.get('showPasswordPrompt');

    if (showPasswordPrompt === 'true') {
        const userPassword = prompt('Please enter the password to access the invitation page:');

        if (userPassword === correctPassword) {
            document.getElementById('invitation-content').style.display = 'block';
            document.getElementById('password-form').style.display = 'none';
        } else {
            alert('Incorrect password. You will be redirected to the homepage.');
            window.location.href = 'index.html';
        }
    }
});

function checkPassword() {
    const correctPassword = 'celebrate40';
    const userPassword = document.getElementById('password-input').value;

    if (userPassword === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('invitation-content').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Function to play the next audio track
    const audioPlayers = [
        document.getElementById('audio1'),
        document.getElementById('audio2'),
        document.getElementById('audio3')
    ];
    let currentTrack = 0;

    const playNextTrack = () => {
        audioPlayers[currentTrack].pause();
        currentTrack = (currentTrack + 1) % audioPlayers.length;
        audioPlayers[currentTrack].currentTime = 0;
        audioPlayers[currentTrack].play();
    };

    audioPlayers.forEach((audioPlayer, index) => {
        audioPlayer.addEventListener('ended', playNextTrack);
    });

    // Start playing the first track
    audioPlayers[currentTrack].play();
});