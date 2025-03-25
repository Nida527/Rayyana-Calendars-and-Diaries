document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-card');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
});