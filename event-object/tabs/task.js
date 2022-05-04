const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
        const tabs = tab[i].parentNode.parentNode;
        
        const activeTab = tabs.querySelector('.tab_active');
        const activeContent = tabs.querySelector('.tab__content_active');

        activeTab.classList.remove('tab_active');
        activeContent.classList.remove('tab__content_active');

        tab[i].classList.add('tab_active')
        tabContent[i].classList.add('tab__content_active')
    })
}
