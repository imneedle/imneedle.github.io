const links = document.querySelectorAll('.nav__link');
const scrollToTop = document.querySelector('.footer__home');
const emails = [
    document.querySelector('.socials__link:nth-child(3)'),
    document.querySelector('.projects__link'),
];

const smoothScroll = function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href || '.hero').offsetTop;
    console.log(href || '.hero', this, offsetTop);

    scroll({ top: offsetTop, behavior: 'smooth' });
};

links.forEach((link) => link.addEventListener('click', smoothScroll));
emails.forEach((link) => link.addEventListener('click', smoothScroll));
scrollToTop.addEventListener('click', smoothScroll);
