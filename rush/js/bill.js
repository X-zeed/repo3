document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu').addEventListener('click', function () {
        this.classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('toggle');
    });

    window.addEventListener('scroll', function () {
        document.getElementById('menu').classList.remove('fa-times');
        document.querySelector('header').classList.remove('toggle');

        if (window.scrollY > 0) {
            document.querySelector('.top').style.display = 'block';
        } else {
            document.querySelector('.top').style.display = 'none';
        }
    });

    document.querySelectorAll('a[href]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.getElementById('ig').onclick = function() {
    window.location.href = 'https://main--harbinger3-3.netlify.app/';
};

window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});