const menu = document.querySelector('.menu-icon')
menu.addEventListener('click', function () {
  const isClicked = menu.classList.contains('clicked')
  menu.classList.toggle('clicked')

  if (!isClicked) {
    menu.src = './images/icon-close.svg'
    return
  }

  menu.src = './images/icon-burger.svg'
})
