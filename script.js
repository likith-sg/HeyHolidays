document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const slideContent = document.getElementById('slideContent');
  const slideshow = document.getElementById('slideshow');
  const slides = document.querySelector('.slides');
 
  if (slides && slides.firstElementChild) {
     const slideWidth = slides.firstElementChild.clientWidth;
 
     toggleButton.addEventListener('click', function () {
       slideContent.classList.toggle('hidden');
       if (slideContent.classList.contains('hidden')) {
         slideContent.style.height = '0';
       } else {
         slideContent.style.height = slideContent.scrollHeight + 'px';
       }
     });
 
     function nextSlide() {
       slides.style.transition = 'transform 0.5s ease-in-out';
       slides.style.transform = `translateX(${-slideWidth}px)`;
       slides.appendChild(slides.firstElementChild);
     }
 
     setInterval(nextSlide, 3000);
  }
 });