const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('img').length;

let activeSlideIndex = 0;
let autoPlayInterval; // Define an interval variable for autoplay

slideLeft.style.top = `-${(slidesLength - 1) * 980}px`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Function to change the slide
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

// Function to start autoplay
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide('up'); // Auto play in the 'up' direction
    }, 3000); // Change the slide every 3 seconds (adjust this interval as needed)
}

// Function to stop autoplay
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start autoplay when the page loads
startAutoPlay();

// Stop autoplay when the user interacts with the slider
sliderContainer.addEventListener('mouseover', stopAutoPlay);
sliderContainer.addEventListener('mouseout', startAutoPlay);
