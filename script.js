document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Example of form validation and sending an alert
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you would normally send the form data to your server
    } else {
        alert('Please fill out all fields.');
    }
});
