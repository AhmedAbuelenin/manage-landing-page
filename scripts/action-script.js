const menu = document.querySelector('.menu-icon')
const navigation = document.querySelector('.navigation')
const overlay = document.querySelector('.overlay')

function toggleActiveClass() {
  menu.classList.toggle('clicked')
  navigation.classList.toggle('active')
  overlay.classList.toggle('active')
}

menu.addEventListener('click', function () {
  const isClicked = menu.classList.contains('clicked')
  toggleActiveClass()

  if (!isClicked) {
    menu.src = './images/icon-close.svg'
    return
  }

  menu.src = './images/icon-burger.svg'
})

overlay.addEventListener('click', function () {
  toggleActiveClass()

  menu.src = './images/icon-burger.svg'
})
