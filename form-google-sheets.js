// Código JavaScript para manejar el formulario y enviar datos a Google Apps Script

document.getElementById('formRegistro').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();

  if (!nombre || !email) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // URL del Web App de Google Apps Script que recibe datos y guarda en Sheets
  const URL_SCRIPT = 'https://script.google.com/macros/s/1s-3IDvVca2RC94Lq-X9rB7NEYkopD-MQ_60qCyuN0TI/exec';

  fetch(URL_SCRIPT, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre: nombre, email: email }),
  })
  .then(response => response.json())
  .then(data => {
    if(data.result === 'success'){
      alert('Gracias por suscribirte. Pronto recibirás nuestro análisis.');
      this.reset();
    } else {
      alert('Error al enviar. Intenta más tarde.');
    }
  })
  .catch(() => {
    alert('Error de red. Intenta más tarde.');
  });
});