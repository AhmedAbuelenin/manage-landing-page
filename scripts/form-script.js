const emailInput = document.getElementById('footer__input')
const errorMessage = document.getElementById('footer__error')
const form = document.querySelector('form')

emailInput.addEventListener('blur', function () {
  if (!form.checkValidity()) {
    showErrMsg()
    return
  }

  resetErr()
})

form.addEventListener('submit', function (event) {
  event.preventDefault()

  if (!form.checkValidity()) {
    showErrMsg()
    return
  }

  form.reset()
  resetErr()
  alert('You are now subscribed successfully')
})

function showErrMsg() {
  errorMessage.innerHTML = emailInput.validationMessage
  emailInput.classList.add('is-invalid')
}

function resetErr() {
  errorMessage.innerHTML = ''
  emailInput.classList.remove('is-invalid')
}
