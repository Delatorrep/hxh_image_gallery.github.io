// Get the image elements by their IDs
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Array of image URLs
const imageUrls = [
  'https://example.com/animated1.gif',
  'https://example.com/animated2.gif',
  // Add more image URLs as needed
];

// Function to shuffle the image URLs array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle the image URLs array
const shuffledImages = shuffle(imageUrls);


// Set image sources
image1.src = 'https://media.giphy.com/media/5argtR58g51Xq/giphy.gif';

image2.src = 'https://tenor.com/bpIcE.gif';

image3.src = 'https://preview.redd.it/99-hxh-is-easily-top-3-best-looking-anime-of-all-time-with-v0-fr6mqmcgdm791.jpg?auto=webp&s=1a336bd9252626f60f7917a2e340dcf3b9d67886';

image4.src = 'https://tenor.com/bRWDn.gif';

image5.src = 'https://tenor.com/bUtX8.gif';

image6.src = 'https://tenor.com/bG0ia.gif';

image7.src = 'https://tenor.com/bJDgJ.gif';

image8.src = 'https://tenor.com/bvPzN.gif';

image9.src = 'https://tenor.com/bvPzT.gif';

image10.src = 'https://tenor.com/1EKB.gif';

image11.rc = 'https://tenor.com/bETme.gif';

image12.src = 'https://tenor.com/bvPAS.gif';

image13.src = 'https://tenor.com/bBCFU.gif';

image14.src = 'https://tenor.com/bipVf.gif';

image15.src = 'https://tenor.com/bKXBi.gif';

image16.src = 'https://tenor.com/bCtRe.gif';

image17.src = 'https://tenor.com/boY49.gif';

image18.src = 'https://tenor.com/bMdcI.gif';

image19.src = 'https://media.giphy.com/media/nvPNlAagUMWn6/giphy.gif';

image20.src = 'https://media.giphy.com/media/r2ITSWBYmlhhC/giphy.gif';

image21.src = 'https://media.giphy.com/media/v89DfOSM5DtRu/giphy.gif';

image22.src = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/8-hisoka-nguyen-hai.jpg';

image23.src = 'https://img.cdn-pictorem.com/uploads/collection/E/EL5KID4GOS/900_Piand-Graphics_HISOKA_PNG.jpg';

image24.src = 'https://static.printler.com/cache/5/c/0/8/8/5/5c0885fcc0c138273d22d3941fa8be4e6116789f.jpg';

image25.src = 'https://pbs.twimg.com/media/FgAkQg2WQAAKii3.jpg:large';

image26.src = 'https://static.wixstatic.com/media/504651_4e2abfcb246446889512df926f87d612~mv2.gif';

image27.src = 'https://s1.zerochan.net/Killua.Zoldyck.600.3858144.jpg';

image28.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/7-hisoka-nguyen-hai.jpg';

image29.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-illumi-nguyen-hai.jpg';

image30.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/10-fighter-hunter-lon-najara.jpg';

image31.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/35-hxh-anime-lon-najara.jpg';

image32.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-justin-gian-santos.jpg';



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

  setTimeout(showSlides, 5000); // Change image every 5 seconds (5000 milliseconds)
}

showSlides(); // Call the function to start the slideshow
