// :: 2.2 Mobile Nav Active Code
var amadoMobNav = document.querySelector('.amado-navbar-toggler');
var navClose = document.querySelector('.nav-close');
var headerArea = document.querySelector('.header-area');

amadoMobNav.addEventListener('click', function () {
    headerArea.classList.toggle('bp-xs-on');
});

navClose.addEventListener('click', function () {
    headerArea.classList.remove('bp-xs-on');
});
