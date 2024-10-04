document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane-container');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust the scroll range for the plane to move higher
    const maxScroll = 1000; // Set how far up the plane can go
    const maxBottom = windowHeight - 100; // Limit how far up the plane can move

    // Make the plane move straight up and grow as you scroll
    if (scrollPosition <= maxScroll) {
        let offsetY = (scrollPosition / maxScroll) * maxBottom;  // Plane moves straight up
        let scale = 0.5 + (scrollPosition / maxScroll) * 0.5;  // Plane grows from scale 0.5 to 1

        plane.style.bottom = `${offsetY}px`;
        plane.style.transform = `translateX(-50%) scale(${scale})`;
    }

    // Fade in the text when the plane is almost at the top
    if (scrollPosition > windowHeight * 1.5) {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
});
