document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('nav-bar');
    var menuBar = document.getElementById('menu-bar');

    toggleBtn.addEventListener('click', function () {
        menuBar.style.display = (menuBar.style.display === 'block') ? 'none' : 'block';
    });
});