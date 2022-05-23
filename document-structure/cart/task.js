const basketBlock = document.querySelector('.cart__products');
const productCard = document.querySelectorAll('.product');

const getProductCount = (block) => Number(block.textContent.trimEnd().replace(/^\s+/, ''));

const getProductInfo = (product) => (
    {
        id: product.dataset.id,
        image: product.querySelector('img').src,
        count: getProductCount(product.querySelector('.product__quantity-value')),
    }
)

for (let i = 0; i < productCard.length; i++) {
    const countDec = productCard[i].querySelector('.product__quantity-control_dec');
    const countBlockValue = productCard[i].querySelector('.product__quantity-value');
    const countInc = productCard[i].querySelector('.product__quantity-control_inc');
    const addButton = productCard[i].querySelector('.product__add');

    countDec.addEventListener('click', () => {
        const countValue = getProductCount(countBlockValue);

        if (countValue !== 1) {
            countBlockValue.textContent = countValue - 1;
        }
    });

    countInc.addEventListener('click', () => {
        const countValue = getProductCount(countBlockValue);
        countBlockValue.textContent = countValue + 1;
    });

    addButton.addEventListener('click', () => {
        const productInfo = getProductInfo(productCard[i]);

        const sameCard = basketBlock.querySelector(`.cart__product[data-id="${productInfo.id}"]`);

        if (sameCard) {
            const basketProductCount = sameCard.querySelector('.cart__product-count');
            basketProductCount.textContent = productInfo.count + getProductCount(basketProductCount);
        } else {
            basketBlock.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productInfo.id}">
            <img class="cart__product-image" src="${productInfo.image}">
            <div class="cart__product-count">${productInfo.count}</div>
        </div>`);
        }
    });
}