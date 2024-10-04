document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Make the plane fly in a curve as you scroll
    if (scrollPosition > 100 && scrollPosition < 800) {
        let offsetX = (scrollPosition - 100) / 2;  // Controls horizontal movement
        let offsetY = Math.sin((scrollPosition - 100) / 200) * 100;  // Simulates curved path
        
        plane.style.transform = `translate(${offsetX}px, -${offsetY}px) rotate(${offsetX / 5}deg)`;
        plane.style.bottom = `${scrollPosition / 10}px`;  // Adjust plane's vertical position
    }

    // Fade in the text when you scroll far enough
    if (scrollPosition > windowHeight * 1.5) {
        text.style.opacity = '1';
    } else {
        text.style.opacity = '0';
    }
});
