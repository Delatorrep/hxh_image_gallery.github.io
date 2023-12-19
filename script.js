// Get the image elements by their IDs
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Set image sources
image1.src = 'https://media.giphy.com/media/5argtR58g51Xq/giphy.gif';

image2.src = 'https://tenor.com/bpIcE.gif';

image2.src = 'https://preview.redd.it/99-hxh-is-easily-top-3-best-looking-anime-of-all-time-with-v0-fr6mqmcgdm791.jpg?auto=webp&s=1a336bd9252626f60f7917a2e340dcf3b9d67886';

image2.src = 'https://tenor.com/bRWDn.gif';

image2.src = 'https://tenor.com/bUtX8.gif';

image2.src = 'https://tenor.com/bG0ia.gif';

image2.src = 'https://tenor.com/bJDgJ.gif';

image2.src = 'https://tenor.com/bvPzN.gif';

image2.src = 'https://tenor.com/bvPzT.gif';

image2.src = 'https://tenor.com/1EKB.gif';

image2.src = 'https://tenor.com/bETme.gif';

image2.src = 'https://tenor.com/bvPAS.gif';

image2.src = 'https://tenor.com/bBCFU.gif';

image2.src = 'https://tenor.com/bipVf.gif';

image2.src = 'https://tenor.com/bKXBi.gif';

image2.src = 'https://tenor.com/bCtRe.gif';

image2.src = 'https://tenor.com/boY49.gif';

image2.src = 'https://tenor.com/bMdcI.gif';

image2.src = 'https://media.giphy.com/media/nvPNlAagUMWn6/giphy.gif';

image2.src = 'https://media.giphy.com/media/r2ITSWBYmlhhC/giphy.gif';

image2.src = 'https://media.giphy.com/media/v89DfOSM5DtRu/giphy.gif';

image2.src = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/8-hisoka-nguyen-hai.jpg';

image2.src = 'https://img.cdn-pictorem.com/uploads/collection/E/EL5KID4GOS/900_Piand-Graphics_HISOKA_PNG.jpg';

image2.src = 'https://static.printler.com/cache/5/c/0/8/8/5/5c0885fcc0c138273d22d3941fa8be4e6116789f.jpg';

image2.src = 'https://pbs.twimg.com/media/FgAkQg2WQAAKii3.jpg:large';

image2.src = 'https://static.wixstatic.com/media/504651_4e2abfcb246446889512df926f87d612~mv2.gif';

image2.src = 'https://s1.zerochan.net/Killua.Zoldyck.600.3858144.jpg';

image2.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/7-hisoka-nguyen-hai.jpg';

image2.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-illumi-nguyen-hai.jpg';

image2.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/10-fighter-hunter-lon-najara.jpg';

image2.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/35-hxh-anime-lon-najara.jpg';

image2.src = 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/hisoka-justin-gian-santos.jpg';



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
