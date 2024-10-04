document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane-container');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust the scroll range for the plane to move higher
    const maxScroll = 1000; // Plane moves for the first 1000 pixels of scroll
    const maxBottomPercent = 90; // Maximum position (in percentage of the viewport) from bottom to top

    // Make the plane move straight up and grow as you scroll
    if (scrollPosition <= maxScroll) {
        // Move plane upwards based on scroll (as percentage of total scroll)
        let offsetYPercent = (scrollPosition / maxScroll) * maxBottomPercent;
        
        // Grow the plane up to 300% (or 3x the original size)
        let scalePercent = 20 + (scrollPosition / maxScroll) * 280; // Starts at 20%, grows to 300%

        plane.style.bottom = `${offsetYPercent}vh`;
        plane.style.transform = `translateX(-50%) scale(${scalePercent / 100})`;  // Convert percent to scale
    }

    // Fade in the text when the plane is almost at the top
    if (scrollPosition > windowHeight * 1.5) {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
});
