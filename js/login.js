const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;


  if (username === 'jose' && password === '1234') {
    
    window.location.href = 'admin.html';

    form.reset();

  } else {
    
    alert('Usuario o contraseña incorrectos');
  }
});
