document.querySelector('.search-link').addEventListener('click', function() {
    document.querySelector('.search-list-navigation').classList.add('search-list-navigation-active');
    document.querySelector('.search-list-first').classList.add('search-invisible')
})

document.querySelector('.closed-search').addEventListener('click', function() {
    document.querySelector('.search-list-navigation').classList.remove('search-list-navigation-active');
    document.querySelector('.search-list-first').classList.remove('search-invisible')
})


document.querySelector('.search-link-mobile').addEventListener('click', function() {
    document.querySelector('.search-list-navigation-mobile').classList.add('search-list-navigation-mobile-active');
    
})

document.querySelector('.closed-search-mobile').addEventListener('click', function() {
    document.querySelector('.search-list-navigation-mobile').classList.remove('search-list-navigation-mobile-active');
    // document.querySelector('.search-list-first').classList.remove('search-invisible')
})


