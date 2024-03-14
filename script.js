// script.js
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const activeButton = document.getElementById(currentPage + '-btn');
    if (activeButton) {
      activeButton.classList.add('active');
    }
  });
  
  function prevImage() {
    const images = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;
  
    images.forEach((image, index) => {
      if (image.style.display !== 'none') {
        currentIndex = index;
      }
    });
  
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    const images = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;
  
    images.forEach((image, index) => {
      if (image.style.display !== 'none') {
        currentIndex = index;
      }
    });
  
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function showImage(index) {
    const images = document.querySelectorAll('.slideshow img');
    images.forEach((image, i) => {
      image.style.display = i === index ? 'block' : 'none';
    });
  }
  