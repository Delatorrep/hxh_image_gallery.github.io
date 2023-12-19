// Define your image URLs
const imageUrls = [
  'https://media.giphy.com/media/nvPNlAagUMWn6/giphy.gif',
  'https://media.giphy.com/media/r2ITSWBYmlhhC/giphy.gif',
  // Add more image URLs here...
];

// Function to shuffle the image URLs
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle the image URLs
const shuffledImages = shuffle(imageUrls);

// Create image elements and append them to the slideshow container
const slideshowContainer = document.getElementById('slideshowContainer');

shuffledImages.forEach((imageUrl, index) => {
  const slide = document.createElement('div');
  slide.classList.add('mySlides', 'fade');

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = `Description for Image ${index + 1}`;
  image.style.width = '100%';

  slide.appendChild(image);
  slideshowContainer.appendChild(slide);
});

// Slideshow logic
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides(); // Start the slideshow
