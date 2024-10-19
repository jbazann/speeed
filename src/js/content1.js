import imagesContent1 from './imagesContent1';

export default () => ({
    currentImage,
    nextImage,
    previousImage,
})

const images = imagesContent1().images;

let currentImage = images[0];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex+1)%images.length;
    currentImage = images[currentIndex];
    return currentImage;
}
function previousImage() {
    currentIndex = (currentIndex+images.length-1)%images.length;
    currentImage = images[currentIndex];
    return currentImage;
}