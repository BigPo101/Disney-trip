document.addEventListener('scroll', function() {
    const plane = document.querySelector('.plane');
    const text = document.querySelector('.hidden-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Make the plane fly in a path as you scroll
    if(scrollPosition > 100 && scrollPosition < 500) {
        let offsetX = (scrollPosition - 100) / 2;
        plane.style.transform = `translateX(${offsetX}px) rotate(${offsetX / 2}deg)`;
    }

    // Fade in the text when the plane reaches a certain position
    if (scrollPosition > windowHeight * 1.4) {
        text.style.opacity = '1';
    }
});
