const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');


let i = 0;

function slider() {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('slider__item_active');
    }

    sliderItems[i].classList.add('slider__item_active');
}

prev.addEventListener('click', () => {

    if (i == 0) {
        i = sliderItems.length - 1;       
    } else {
        i--;
    }
    slider();
});

next.addEventListener('click', () => {

    if (i + 1 == sliderItems.length) {
        i = 0;
        
    } else {
        i++;
    }
    slider();
});

