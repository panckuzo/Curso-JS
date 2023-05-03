const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;


  if (username.toLowerCase() === 'jose' && password === '1234') {
    
    window.location.href = 'admin.html';

    form.reset();

  } else {
    Swal.fire({
      title: "Usuario o Contraseña incorrectos",
      text:"Intentelo nuevamnete",
      icon:"error",
      confirmButtonText: "OK",
      timer: 5000
    });
  }
});