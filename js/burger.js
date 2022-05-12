document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-link')

    burger.addEventListener('click', function() {
        document.querySelector('.burger-menu-mobile').classList.toggle('active-burger')
        

    })
    burger.addEventListener('click', function() {
        document.querySelector('.burger-link').classList.toggle('burger-link-on')
    })
})