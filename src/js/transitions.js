function revealOnScroll(selector) {
    const reveals = document.querySelectorAll(selector);
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    for (let i = 0; i < reveals.length; i++) {
        const revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener('scroll', () => {
    revealOnScroll('.reveal-from-left');
    revealOnScroll('.reveal-from-right');
    revealOnScroll('.reveal-from-top');
    revealOnScroll('.reveal-from-bottom');
    revealOnScroll('.reveal-from-left-no-opacity');
    revealOnScroll('.reveal-from-right-no-opacity');
    revealOnScroll('.reveal-from-top-no-opacity');
    revealOnScroll('.reveal-from-bottom-no-opacity');
});

window.addEventListener('load', () => {
    revealOnScroll('.reveal-from-left');
    revealOnScroll('.reveal-from-right');
    revealOnScroll('.reveal-from-top');
    revealOnScroll('.reveal-from-bottom');
    revealOnScroll('.reveal-from-left-no-opacity');
    revealOnScroll('.reveal-from-right-no-opacity');
    revealOnScroll('.reveal-from-top-no-opacity');
    revealOnScroll('.reveal-from-bottom-no-opacity');
});