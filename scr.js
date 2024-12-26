document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const button = document.querySelector('.confirm');
  const statusDiv = document.querySelector('.status');

  button.addEventListener('click', function () {
    const formData = new FormData(form);

    fetch('sender.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        statusDiv.textContent = 'Форма отправлена успешно!';
        form.reset();
      } else {
        throw new Error('Ошибка отправки формы');
      }
    })
    .catch(error => {
      statusDiv.textContent = error.message;
    });
  });
});