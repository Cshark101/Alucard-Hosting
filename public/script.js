const form = document.getElementById('contact-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  messageEl.textContent = 'Sending...';

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    if (result.success) {
      messageEl.textContent = result.message;
      form.reset();
    } else {
      messageEl.textContent = 'There was an issue sending your request. Please try again.';
    }
  } catch (error) {
    messageEl.textContent = 'Network error. Please try again later.';
  }
});
