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
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const filterLinks = document.querySelectorAll('.segmented-nav a');
  const images = document.querySelectorAll('.container img');

  filterLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all
      filterLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      const category = this.textContent.trim().toLowerCase();

      images.forEach(img => {
        const imgCategory = img.getAttribute('data-category');

        if (category === 'thumbnails' || imgCategory === category) {
          img.style.display = 'inline-block';
        } else {
          img.style.display = 'none';
        }
      });
    });
  });

  const toggleButton = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
toggleButton.addEventListener('click', () => {
  navLink.classList.toggle('active');
});

// Close menu when a nav link is clicked (mobile)
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLink.classList.remove('active');
  });
});