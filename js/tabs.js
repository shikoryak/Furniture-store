const tabContainer = document.getElementById('tabContainer');
const tabs = document.querySelectorAll('#collection .tabcontent');
const buttons = Array.from(tabContainer.children);

buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach((b) => {
            b.classList.remove('active');
        });
        tabs.forEach((t) => {
            t.style.display = 'none';
        })

        button.classList.add('active');
        
        const tab = Array.from(tabs).find((t) => t.id === button.dataset.for);
        tab.style.display = 'flex';
    }

});