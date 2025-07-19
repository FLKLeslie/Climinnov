// Optional: Add scroll-based animation or log user interactions
window.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded – Ready to inspire green innovation!");

  // Carousel for hero section background
  const hero = document.querySelector('.hero');
  const images = ['assets/back1.jpg', 'assets/back2.jpg'];
  let current = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  changeBackground(); // Set initial background
  setInterval(changeBackground, 8000); // Change every 4 seconds
});
