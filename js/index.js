// Initialize the current slide index
let currentSlide = 0;

/**
 * Display the slide at the given index and update active dot.
 * @param {number} index - Index of the slide to show.
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slides img');
    const dots = document.querySelectorAll('.dot');

    // Update the current slide index
    currentSlide = (index + slides.length) % slides.length;

    // Move the slides container to show the current slide
    document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

/**
 * Initialize the carousel with the first slide and active dot.
 */
function initCarousel() {
    showSlide(currentSlide); // Show the first slide initially
}

// Initialize the carousel
initCarousel();
