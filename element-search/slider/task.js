const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');

const slider = (removable, current) => {
    sliderItems[current].classList.add('slider__item_active');
    sliderItems[removable].classList.remove('slider__item_active');
}

function isCurrent (slider) {
    return slider.classList.contains('slider__item_active');
}

prev.addEventListener('click', () => {
    let currentIndex = Array.prototype.slice.call(sliderItems).findIndex(isCurrent);
    let prevIndex;

    if (currentIndex == 0) {
        prevIndex = sliderItems.length - 1;       
    } else {
        prevIndex = currentIndex - 1;
    }

    slider(currentIndex, prevIndex);
});

next.addEventListener('click', () => {
    let currentIndex = Array.prototype.slice.call(sliderItems).findIndex(isCurrent);
    let nextIndex;

    if (currentIndex == sliderItems.length - 1) {
        nextIndex = 0;       
    } else {
        nextIndex = currentIndex + 1;
    }

    slider(currentIndex, nextIndex);
});

