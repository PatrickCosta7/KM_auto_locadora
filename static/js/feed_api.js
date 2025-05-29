const form = document.getElementById('contact-form');
const alertDiv = document.getElementById('form-alert');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  alertDiv.textContent = '';
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  const response = await fetch('../../api/contact.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    alertDiv.textContent = 'Message sent! Thank you.';
    alertDiv.className = 'alert alert-success mt-3';
    form.reset();
  } else {
    alertDiv.textContent = 'There was a problem. Please try again.';
    alertDiv.className = 'alert alert-danger mt-3';
  }
});