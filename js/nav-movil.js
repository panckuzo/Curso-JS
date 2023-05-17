
let amadoMobNav = document.querySelector('.amado-navbar-toggler');
let navClose = document.querySelector('.nav-close');
let headerArea = document.querySelector('.header-area');

amadoMobNav.addEventListener('click', function () {
    headerArea.classList.toggle('bp-xs-on');
});

navClose.addEventListener('click', function () {
    headerArea.classList.remove('bp-xs-on');
});
