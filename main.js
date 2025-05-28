document.addEventListener('wheel', function(event) {
  const container = document.querySelector('.slide-container');
  if (event.deltaY > 0) {
    // Scroll down
    container.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  } else {
    // Scroll up
    container.scrollBy({
      top: -window.innerHeight,
      behavior: 'smooth'
    });
  }
  event.preventDefault(); // Prevent default scrolling
});
