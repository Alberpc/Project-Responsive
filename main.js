import "./sass/style.scss";

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Validar el nombre al escribir
nameInput.addEventListener('input', function() {
  if (nameInput.value.trim() !== '') {
    nameInput.classList.add('valid');
    nameInput.classList.remove('invalid');
  } else {
    nameInput.classList.remove('valid');
  }
});

// Validar el email al escribir
emailInput.addEventListener('input', function() {
  if (emailInput.validity.valid) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
  }
});

// Validar el mensaje al escribir
messageInput.addEventListener('input', function() {
  if (messageInput.value.trim() !== '') {
    messageInput.classList.add('valid');
    messageInput.classList.remove('invalid');
  } else {
    messageInput.classList.remove('valid');
  }
});
