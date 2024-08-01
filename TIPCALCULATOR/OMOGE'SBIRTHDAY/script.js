document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#rsvp-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your RSVP!');
    });
});
