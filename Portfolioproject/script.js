// Toggle hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('active');
  }
  
  // EmailJS initialization
  (function() {
    emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
  })();
  
  // Handle form submission
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = event.target.querySelector('input[placeholder="Your Name"]').value;
    const email = event.target.querySelector('input[placeholder="Your Email"]').value;
    const message = event.target.querySelector('textarea[placeholder="Your Message"]').value;
  
    // Validate form values
    if (name && email && message) {
      // Send email using EmailJS
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'ayodejige@yahoo.com' // Your email address
      }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Redirect to confirmation page
        window.location.href = 'confirmation.html';
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.');
      });
    } else {
      alert('Please fill out all fields.');
    }
  });
  