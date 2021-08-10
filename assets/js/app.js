let nubes = document.getElementById('nubes');
let sol = document.getElementById('sol');
let body = document.getElementById('body');
let pajaro1 = document.getElementById('pajaro1');
let pajaro2 = document.getElementById('pajaro2');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    sol.style.top = value * 1.05 + 'px';
    nubes.style.left = value * 0.5 + 'px';

    pajaro1.style.top = value * -1.5 + 'px';
    pajaro1.style.left = value * -5 + 'px';

    pajaro2.style.top = value * -1.5 + 'px';
    pajaro2.style.left = value * 2 + 'px';
});


