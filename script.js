

// Array of image URLs
const imageUrls = [
  'https://media.giphy.com/media/5argtR58g51Xq/giphy.gif',
  'https://tenor.com/bpIcE.gif',
  'https://preview.redd.it/99-hxh-is-easily-top-3-best-looking-anime-of-all-time-with-v0-fr6mqmcgdm791.jpg?auto=webp&s=1a336bd9252626f60f7917a2e340dcf3b9d67886',
  'https://tenor.com/bRWDn.gif',
  'https://tenor.com/bUtX8.gif',
  'https://tenor.com/bG0ia.gif',
  'https://tenor.com/bJDgJ.gif',
  'https://tenor.com/bvPzN.gif',
  'https://tenor.com/bvPzT.gif',
  'https://tenor.com/1EKB.gif',
  'https://tenor.com/bETme.gif',
  'https://tenor.com/bvPAS.gif',
  'https://tenor.com/bBCFU.gif',
  'https://tenor.com/bipVf.gif',
  'https://tenor.com/bKXBi.gif',
  'https://tenor.com/bCtRe.gif',
  'https://tenor.com/boY49.gif',
  'https://tenor.com/bMdcI.gif',
  'https://media.giphy.com/media/nvPNlAagUMWn6/giphy.gif',
  'https://media.giphy.com/media/r2ITSWBYmlhhC/giphy.gif',
  'https://media.giphy.com/media/v89DfOSM5DtRu/giphy.gif',
  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/8-hisoka-nguyen-hai.jpg',
  'https://img.cdn-pictorem.com/uploads/collection/E/EL5KID4GOS/900_Piand-Graphics_HISOKA_PNG.jpg',
  'https://static.printler.com/cache/5/c/0/8/8/5/5c0885fcc0c138273d22d3941fa8be4e6116789f.jpg',
  'https://pbs.twimg.com/media/FgAkQg2WQAAKii3.jpg:large',
  'https://static.wixstatic.com/media/504651_4e2abfcb246446889512df926f87d612~mv2.gif',
  'https://s1.zerochan.net/Killua.Zoldyck.600.3858144.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/7-hisoka-nguyen-hai.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-illumi-nguyen-hai.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/10-fighter-hunter-lon-najara.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/35-hxh-anime-lon-najara.jpg',
  'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-justin-gian-santos.jpg',


  // Add more image URLs as needed
];

/const shuffledImages = imageUrls.sort(() => Math.random() - 0.5);

const images = document.querySelectorAll('.mySlides img');

images.forEach((image, index) => {
  image.src = shuffledImages[index];
  image.alt = `Description for Image ${index + 1}`;
});

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

  setTimeout(showSlides, 5000); // Change image every 5 seconds (5000 milliseconds)
}

showSlides();
