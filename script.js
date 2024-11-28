// JavaScript for form submission (Optional - you can add AJAX here or handle form data)

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});
