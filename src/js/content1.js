
export default () => ({
    currentImage: currentImage,
    nextImage: nextImage,
    previousImage: previousImage,
    overlay: overlay,
    getButtonHint: getButtonHint
})

const images = [
    '/img/wip.webp',
    '/img/wide1.webp',
    '/img/wide2.webp',
    '/img/wide3.webp',
    '/img/wide4.webp',
    '/img/wide5.webp',
    '/img/wide6.webp',
    '/img/wide7.webp',
];

const overlays = [
    {
        image: '/img/wip-sign.png',
        class: 'size-3/5 self-center mt-2 drop-shadow-2xl'
    }
]

let currentImage = images[0];
let currentIndex = 0;

function nextImage() {
    if(images.length > currentIndex) {
        currentIndex += 1;
        currentImage = images[currentIndex];
        return currentImage;
    }
}
function previousImage() {
    if(currentIndex > 0) {
        currentIndex -= 1;
        currentImage = images[currentIndex];
        return currentImage;
    }
}
function overlay() {
    const data = {overlayShow: false, overlayImage: '', overlayClass: ''};
    if(currentIndex === 0) {
        data.overlayShow = true;
        data.overlayImage = overlays[0].image;
        data.overlayClass = overlays[0].class;

    }
    return data;
}
function getButtonHint() {
    return document.getElementById('content-1-button-hint').content;
}