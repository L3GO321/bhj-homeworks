const rotator = document.querySelectorAll('.rotator')

const interval = (rotatorCase) => {
    const isActive = (item) => (item.classList.contains('rotator__case_active'))

    let activeIndex = Array.prototype.slice.call(rotatorCase).findIndex(isActive);

    rotatorCase[activeIndex].classList.remove('rotator__case_active');

    if (activeIndex === rotatorCase.length - 1) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    rotatorCase[activeIndex].classList.add('rotator__case_active');
}

for (let i = 0; i < rotator.length; i++) {
    const rotatorCase = rotator[i].querySelectorAll('.rotator__case');
    setInterval(() => interval(rotatorCase), 1000)
}
