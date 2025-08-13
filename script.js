const thumbnails = document.querySelectorAll('#Portfolio .container img');
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-image');
thumbnails.forEach(img => {
    img.addEventListener('click', () => {
        popupImage.src = img.src;
        popupContainer.style.display = 'block';
        document.body.classList.add('dimmed');
    });
});

// Click image to close popup
popupImage.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    document.body.classList.remove('dimmed');
});


    const navLinks = document.querySelectorAll('.segmented-nav a');
    const images = document.querySelectorAll('.container img');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const maxInitial = 16;
    let currentCategory = 'thumbnails';

    function filterImages(category, showAll = false) {
      let visibleCount = 0;
      currentCategory = category;

      images.forEach(img => {
        const imgCategory = img.getAttribute('data-category');

        if (imgCategory === category) {
          if (showAll || visibleCount < maxInitial) {
            img.style.display = 'inline-block';
            visibleCount++;
          } else {
            img.style.display = 'none';
          }
        } else {
          img.style.display = 'none';
        }
      });

      // Show "View More" button only if there are more than maxInitial images
      const totalInCategory = Array.from(images).filter(img => img.getAttribute('data-category') === category).length;
      viewMoreBtn.style.display = (totalInCategory > maxInitial && !showAll) ? 'inline-block' : 'none';
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const category = this.textContent.trim().toLowerCase();
        filterImages(category, false);
      });
    });

    viewMoreBtn.addEventListener('click', () => {
  window.location.href = `portfolio-gallery.html?category=${currentCategory}`;
});


    // Initial load
    filterImages('thumbnails', false);

  const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLink = navbar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Close the navbar when a nav link is clicked
navLink.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
});

  window.addEventListener('load', () => {
    const activeTab = document.querySelector('.nav-menu a.active');
    if (activeTab && activeTab.offsetLeft) {
      const parent = activeTab.parentElement.parentElement; // ul.nav-menu
      parent.scrollLeft = activeTab.offsetLeft - parent.offsetWidth / 2 + activeTab.offsetWidth / 2;
    }
  });