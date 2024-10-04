document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane-container');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust the scroll range for the plane to move upwards
    const maxScroll = 1000; // Plane moves upwards for the first 1000px
    const maxBottomPercent = 90; // Maximum position in percentage of viewport (plane stops here when it hits the top)

    // Plane keeps moving off the screen after reaching the top
    const offscreenThreshold = maxScroll + 500; // Plane will keep moving for another 500px after maxScroll

    // If scroll is high enough, move the plane up from off the screen
    if (scrollPosition <= maxScroll) {
        // Move the plane upwards (from below the screen to near the top)
        let offsetYPercent = (scrollPosition / maxScroll) * maxBottomPercent;
        let scalePercent = 20 + (scrollPosition / maxScroll) * 280; // Starts at 20%, grows to 300%

        plane.style.bottom = `${offsetYPercent - 100}vh`; // Adjust to start the plane from offscreen (-100vh)
        plane.style.transform = `translateX(-50%) scale(${scalePercent / 100})`;
    } else if (scrollPosition > maxScroll && scrollPosition <= offscreenThreshold) {
        // Continue moving the plane off the screen
        let offsetYBeyond = maxBottomPercent + (scrollPosition - maxScroll) / 5; // Keeps going off-screen slowly
        plane.style.bottom = `${offsetYBeyond}vh`;
    }

    // Fade in the text when the plane is almost at the top
    if (scrollPosition > windowHeight * 1.5) {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
});
