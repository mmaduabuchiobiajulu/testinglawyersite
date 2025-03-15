// Smooth Scroll for "Learn More" button
document.querySelector('.learn-more-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior of link
    const targetUrl = this.querySelector('a').getAttribute('href');
    
    // Scroll smoothly to the target (you can adjust this part if you want to navigate to another page)
    window.location.href = targetUrl;
});

// Fade-in effect for content
window.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.h1');
    const paragraph = document.querySelector('.p1');
    const button = document.querySelector('.learn-more-btn');

    // Set initial opacity to 0
    heading.style.opacity = 0;
    paragraph.style.opacity = 0;
    button.style.opacity = 0;

    // Function to fade-in elements
    function fadeIn(element) {
        let opacity = 0;
        const interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.05;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 30);
    }

    // Trigger fade-in for each element with a slight delay
    setTimeout(function () { fadeIn(heading); }, 300);
    setTimeout(function () { fadeIn(paragraph); }, 500);
    setTimeout(function () { fadeIn(button); }, 700);
});
