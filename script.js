// Get the image elements by their IDs
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Set image sources
image1.src = 'https://media.giphy.com/media/5argtR58g51Xq/giphy.gif';
image1.alt = 'Description for Image 1';

image2.src = 'https://tenor.com/bUtX8.gif';
image2.alt = 'Description for Image 2';

// Your existing slideshow logic here...
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides(); // Call the function to start the slideshow
