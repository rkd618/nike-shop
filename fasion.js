  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('menu-toggle')
    const navbar = document.getElementById('responsive-nav')

    toggleButton.addEventListener('click', () => {
      navbar.classList.toggle('active')
      console.log("sudhar jaa")
    })
  })
