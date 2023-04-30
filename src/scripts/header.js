const menu = document.querySelector('.menu-icon')
const navigation = document.querySelector('.navigation')
const overlay = document.querySelector('.overlay')
const menuIconPath = './src/assets/images/icon-burger.svg'

function toggleActiveClass() {
  menu.classList.toggle('clicked')
  navigation.classList.toggle('active')
  overlay.classList.toggle('active')
}

menu.addEventListener('click', function () {
  const isClicked = menu.classList.contains('clicked')
  toggleActiveClass()

  if (!isClicked) {
    menu.src = './src/assets/images/icon-close.svg'
    return
  }

  console.log('src url', menu.getAttribute('src'))

  menu.src = menuIconPath
})

overlay.addEventListener('click', function () {
  toggleActiveClass()

  menu.src = menuIconPath
})
