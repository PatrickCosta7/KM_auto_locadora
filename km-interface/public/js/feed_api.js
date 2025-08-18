const form = document.getElementById('contact-form');
const alertDiv = document.getElementById('form-alert');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  alertDiv.textContent = '';
  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    car: form.car.value,
  };
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    alertDiv.textContent = 'Mensagem enviada! Obrigado.';
    alertDiv.className = 'alert alert-success mt-3';
    form.reset();
  } else {
    alertDiv.textContent = 'Houve um problema. Por favor tente novamente.';
    alertDiv.className = 'alert alert-danger mt-3';
  }
});