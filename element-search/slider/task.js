const imageElms = document.querySelectorAll(".slider__item");
const sliderCount = imageElms.length;
const dotElms = document.querySelectorAll(".slider__dot");
const leftBtn = document.querySelector(".slider__arrow_prev");
const rightBtn = document.querySelector(".slider__arrow_next");

let activeSlideIndex = 0;

function toggleActiveSlide(activeSlideIndex) {
    let activeSlide = document.querySelector(".slider__item_active");
    let activeDot = document.querySelector(".slider__dot_active");
    activeSlide.classList.remove('slider__item_active');
    activeDot.classList.remove('slider__dot_active');
    imageElms.item(activeSlideIndex).classList.add('slider__item_active');
    dotElms.item(activeSlideIndex).classList.add('slider__dot_active');   
}

leftBtn.addEventListener('click', function(){
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = sliderCount - 1;
    }
    toggleActiveSlide(activeSlideIndex);
    return activeSlideIndex;
}); 

rightBtn.addEventListener('click', function(){
    activeSlideIndex++;
    if (activeSlideIndex === sliderCount) {
        activeSlideIndex = 0;
    }
    toggleActiveSlide(activeSlideIndex);
    return activeSlideIndex;
});

for (let k = 0; k < sliderCount; k++) {
    dotElms.item(k).addEventListener('mouseover', () => toggleActiveSlide(k));
}