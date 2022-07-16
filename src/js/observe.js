const aboutObserver = new IntersectionObserver(
    (entries, observer) =>
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        }),
    { threshold: window.innerWidth >= 750 ? 0.25 : 0 }
);

const projectsObserver = new IntersectionObserver(
    (entries, observer) =>
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        }),
    { threshold: window.innerWidth >= 750 ? 0.1 : 0 }
);

const contactObserver = new IntersectionObserver(
    (entries, observer) =>
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        }),
    { threshold: window.innerWidth >= 750 ? 0.2 : 0 }
);

const orbitObserver = new IntersectionObserver(
    (entries, observer) =>
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('animations--paused');
            observer.unobserve(entry.target);
        }),
    {
        threshold: 0.25,
    }
);

const orbit = document.querySelector('.orbit');
orbitObserver.observe(orbit);

const about = document.querySelector('.about');
const nestedAbout = document.querySelectorAll('.about .section--hidden');
const hero = document.querySelectorAll('.hero .section--hidden');
aboutObserver.observe(about);
nestedAbout.forEach((section) => aboutObserver.observe(section));
hero.forEach((section) => aboutObserver.observe(section));

const project = document.querySelector('.projects');
projectsObserver.observe(project);

const contact = document.querySelector('.contact');
contactObserver.observe(contact);
