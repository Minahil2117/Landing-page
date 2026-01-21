AOS.init({
    duration: 1200,
    once: true,
});

// Smooth scroll for the CTA
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#shop');
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});