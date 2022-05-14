const checks = document.querySelectorAll('.interest__check');

for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener('change', (e) => {
        const childrenBlock = e.target.parentNode.nextElementSibling;
        
        if (childrenBlock) {
            const children = childrenBlock.querySelectorAll('.interest__check');

            for (let i = 0; i < children.length; i++) {
                children[i].checked = e.target.checked;
            }
        }
    })
}
