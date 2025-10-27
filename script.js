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

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightboxOverlay');
  const content = document.getElementById('lightboxContent');

  document.querySelectorAll('.lightbox-trigger').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      content.innerHTML = ''; // clear old content

      if (href.endsWith('.mp4')) {
        const vid = document.createElement('video');
        vid.src = href;
        vid.controls = true;
        vid.autoplay = true;
        vid.loop = true;
        vid.className = 'lightboxVid';
        content.appendChild(vid);
      } else {
        const img = document.createElement('img');
        img.src = href;
        img.className = 'lightboxImg';
        content.appendChild(img);
      }

      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => overlay.style.display = 'none');
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.style.display = 'none';
  });
});