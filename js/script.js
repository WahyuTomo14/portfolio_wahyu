document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to top functionality
    var scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerText = 'Scroll to Top';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Hover effect for portfolio items
    var portfolioItems = document.querySelectorAll('.item');

    portfolioItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', function () {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
