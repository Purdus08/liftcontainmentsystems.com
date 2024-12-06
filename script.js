document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});


document.getElementById('buyBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('/.netlify/functions/sendEmail', { method: 'POST' });
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert('Failed to send email. Please try again.');
  }
});
