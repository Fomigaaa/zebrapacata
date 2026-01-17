document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let autoPlay;

    function goToSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        currentSlide = n;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function startAutoplay() {
        autoPlay = setInterval(nextSlide, 10000);
    }

    function stopAutoplay() {
        clearInterval(autoPlay);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoplay();
            goToSlide(index);
            startAutoplay();
        });
    });

    goToSlide(0);
    startAutoplay();
});