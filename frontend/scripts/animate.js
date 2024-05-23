document.addEventListener("DOMContentLoaded", () => {
    const headline = document.getElementById("animatedHeadline");
    const animations = ['fadeInScale', 'slideInLeft', 'bounceIn', 'rotateIn', 'zoomIn', 'flipIn'];

    function animateHeadline() {
        // Remove any existing animation class
        headline.classList.remove(...animations);

        // Choose a random animation
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        headline.classList.add(randomAnimation);

        // Remove the animation class after the animation duration (1s) to reset it
        setTimeout(() => {
            headline.classList.remove(randomAnimation);
        }, 1000);

        // Schedule the next animation at a random interval between 2 and 5 seconds
        const nextAnimationDelay = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(animateHeadline, nextAnimationDelay);
    }

    // Start the initial animation
    animateHeadline();
});
