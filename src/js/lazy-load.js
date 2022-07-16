const lazyImages = document.querySelectorAll('.lazy-image');

const observer = new IntersectionObserver(
    (entries, observer) =>
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.src = entry.target.dataset.src;
            entry.target.addEventListener('load', () => {
                entry.target.classList.remove('lazy-image');
            });
            observer.unobserve(entry.target);
        }),
    { rootMargin: '0px 0px 150px' }
);

lazyImages.forEach((image) => observer.observe(image));
