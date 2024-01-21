document.addEventListener("DOMContentLoaded", function (event) {
    const toggle = document.getElementById('header-toggle');
    const btnToggle = document.getElementById('navbar-toggler');
    btnToggle.addEventListener('click', () => {
        toggle.classList.toggle('bx-x');
    });
    document.body.style.overflowX = 'hidden'
});
