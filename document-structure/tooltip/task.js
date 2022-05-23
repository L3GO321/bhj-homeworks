const hasTooltip = document.querySelectorAll('.has-tooltip');

const getTooltip = (text) => `<div class="tooltip" style="left: 0; top: 0">${text}</div>`;

const setTooltipPosition = (tooltip, block) => {
    const blockRect =  block.getBoundingClientRect();

    tooltip.style.top = `${blockRect.y + blockRect.height}px`;
    tooltip.style.left = `${blockRect.x}px`;
};

for (let i = 0; i < hasTooltip.length; i++) {
    const text = hasTooltip[i].getAttribute('title');
    hasTooltip[i].insertAdjacentHTML('beforeEnd', getTooltip(text));

    hasTooltip[i].addEventListener('click', (e) => {
        e.preventDefault();

        const currentTooltip = e.target.querySelector('.tooltip');
        const activeTooltip = document.querySelector('.tooltip_active');

        activeTooltip && activeTooltip !== currentTooltip && activeTooltip.classList.remove('tooltip_active');

        setTooltipPosition(currentTooltip, e.target);

        currentTooltip.classList.toggle('tooltip_active');
    })
}

document.addEventListener('scroll', () => {
    const activeTooltip = document.querySelector('.tooltip_active');

    activeTooltip && setTooltipPosition(activeTooltip, activeTooltip.parentNode);
})