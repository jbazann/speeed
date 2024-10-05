
export default () => ({
    currentImage: currentImage,
    nextImage: nextImage,
    previousImage: previousImage,
    overlay: overlay,
    overlayData: overlayData
})

const images = [
    '/img/wip.webp',
    '/img/wide1.jpg',
    '/img/wide2.jpg',
    '/img/wide3.jpg',
    '/img/wide4.jpg',
    '/img/wide5.jpg',
    '/img/wide6.jpg',
    '/img/wide7.jpg',
];

const overlays = [
    {
        image: '/img/wip-sign.png',
        class: 'size-3/5 self-center mt-2 drop-shadow-strong'
    }
]

let currentImage = images[0];
let currentIndex = 0;
let overlayData = overlay();
function nextImage() {
    currentIndex = (currentIndex+1)%images.length;
    currentImage = images[currentIndex];
    overlay();
    return currentImage;
}
function previousImage() {
    currentIndex = (currentIndex+images.length-1)%images.length;
    currentImage = images[currentIndex];
    overlay();
    return currentImage;
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