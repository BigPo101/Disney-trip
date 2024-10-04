document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane-container');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Make the plane move straight up and grow as you scroll
    if (scrollPosition <= 600) {
        let offsetY = scrollPosition / 2; // Plane moves up as you scroll
        let scale = 0.5 + scrollPosition / 1200; // Plane grows from scale 0.5 to 1 as you scroll

        plane.style.bottom = `${offsetY}px`;
        plane.style.transform = `translateX(-50%) scale(${scale})`;
    }

    // Fade in the text when you scroll far enough
    if (scrollPosition > windowHeight * 1.5) {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
});
