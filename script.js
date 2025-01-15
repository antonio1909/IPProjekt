function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElementsOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showElementsOnScroll);

showElementsOnScroll();
