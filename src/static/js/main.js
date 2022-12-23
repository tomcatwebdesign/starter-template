const menuBtn       = document.getElementById('menu-btn');
const menu          = document.getElementById('menu');
const menuLinks     = document.querySelectorAll('.menu-item');
const body = document.querySelector('body');

// Open and close menu
menuBtn.addEventListener('click', function () {
    if (menu.classList.contains('open-menu')) {
        menu.classList.remove('open-menu');
        body.classList.remove('stop-scrolling');
        menuBtn.classList.remove('active-menu');
    } else {
        menu.classList.add('open-menu');
        menuBtn.classList.add('active-menu');
        body.classList.add('stop-scrolling');
    };
});

// Close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('open-menu');
        body.classList.remove('stop-scrolling');
        menuBtn.classList.remove('active-menu');
    });
});