// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add click handlers for project tiles
document.querySelectorAll('.project-tile, .featured-project').forEach(tile => {
    tile.addEventListener('click', function(e) {
        if (!e.target.matches('.project-link')) {
            console.log('Opening project:', this.querySelector('.tile-title, .project-title').textContent);
        }
    });
});

window.addEventListener("load", (event) => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        console.log(link.innerText);
        link.href = link.href + link.innerText;
    });
});