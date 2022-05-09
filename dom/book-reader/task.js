const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSize.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        fontSize.forEach(el => {
            el.classList.remove('font-size_active');
        })
        
        item.classList.add('font-size_active');
        const size = item.dataset.size;

        if (size === 'small') {
            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big')
        }

        if (size === 'big') {
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
        }

        if (!size) {
            book.classList.remove('book_fs-big', 'book_fs-small');
        }
    })
})

