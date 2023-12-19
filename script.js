// Define your image URLs
const imageUrls = [
    'https://media.giphy.com/media/5argtR58g51Xq/giphy.gif',
  
  'https://tenor.com/bpIcE.gif',

  'https://giffiles.alphacoders.com/143/143335.gif',

 	'https://media.giphy.com/media/qDO6QPt4VczVS/giphy.gif',

  'https://media.giphy.com/media/r2ITSWBYmlhhC/giphy.gif',

  'https://media.giphy.com/media/v89DfOSM5DtRu/giphy.gif',

  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/8-hisoka-nguyen-hai.jpg',

  'https://img.cdn-pictorem.com/uploads/collection/E/EL5KID4GOS/900_Piand-Graphics_HISOKA_PNG.jpg',

  'https://pbs.twimg.com/media/FgAkQg2WQAAKii3.jpg:large',

  'https://static.wixstatic.com/media/504651_4e2abfcb246446889512df926f87d612~mv2.gif',

  'https://s1.zerochan.net/Killua.Zoldyck.600.3858144.jpg',

  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-illumi-nguyen-hai.jpg',

  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/35-hxh-anime-lon-najara.jpg',

 	'https://media.giphy.com/media/ug36NeVMTXcZO/giphy.gif',

 	'https://media.giphy.com/media/I1KQl6AZ6vnIQ/giphy.gif',

 	'https://media.giphy.com/media/irZQA0LSRtpWE/giphy.gif',

 	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a290752-d7eb-45e3-aa31-8e71b544cde0/ddb4kmf-9211ac7a-b1d1-4d68-b8e3-eef40c2b237f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhMjkwNzUyLWQ3ZWItNDVlMy1hYTMxLThlNzFiNTQ0Y2RlMFwvZGRiNGttZi05MjExYWM3YS1iMWQxLTRkNjgtYjhlMy1lZWY0MGMyYjIzN2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B4OZZlX4wIUThM6QCokEzPPrUMQZLHNyOV7KplI9f70',

 	'https://steamuserimages-a.akamaihd.net/ugc/640994505185168020/11B5F86D582B699CC551FBFD2B214ACC75FFC5AC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',

 	'https://images.squarespace-cdn.com/content/v1/5d23cc32a336c10001638248/1629258741260-EIYHEBWQ4BZBUJF737K4/hisoka-card.gif',

 	'https://static.wikia.nocookie.net/hunter-x-hunter-fanon/images/f/ff/Bungee_Gum.gif/revision/latest?cb=20210421190151',

 	'https://i.imgur.com/EdDQLap.gif',

 	'https://gifdb.com/images/high/hisoka-morow-slow-walk-sxeabhh5vdic24on.gif',

 	'https://img.wattpad.com/2ec4753d9d396b114fc4e497e0ee6dd1498ed56d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4d497365324e76534569594c6f413d3d2d3632313339383337312e313534636630356165613336316561613636313532313532313138392e676966',
/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-justin-gian-santos.jpg',
  
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

shuffledImages.forEach((imageUrl) => {
  const slide = document.createElement('div');
  slide.classList.add('mySlides', 'fade');

  const image = document.createElement('img');
  image.src = imageUrl;
  image.style.width = '100%';
  image.style.height = 'auto'; // Maintain aspect ratio
  image.alt = ''; // Remove alt attribute

  slide.appendChild(image);
  slideshowContainer.appendChild(slide);
});

// Slideshow logic
let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides(); // Start the slideshow
