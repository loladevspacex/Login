let btn = document.querySelector('.fa-eye')
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#password')
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
function login() {
  let username = document.querySelector('#username')
  let userLabel = document.querySelector('#userLabel')

  let password = document.querySelector('#password')
  let passwordLabel = document.querySelector('#passwordLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []

  let userValid = {
    username: '',
    password: ''
  }
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach(item => {
    if (username.value == item.userCad && password.value == item.passwordCad) {
      userValid = {
        username: item.userCad,
        password: item.passwordCad
      }
    }
  })
  if (
    username.value == userValid.username &&
    password.value == userValid.password
  ) {
    window.location.href = 'https://loladevspacex.github.io/Login-screen/' 

    let token = Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)
  } else {
    userLabel.setAttribute('style', 'color: red')
    username.setAttribute('style', 'border-color: red')
    passwordLabel.setAttribute('style', 'color: red')
    password.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Ops, não conheço esse usúario'
    username.focus()
  }
}
