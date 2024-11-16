const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
removeBorder();
removeShow();
this.classList.add('tab-border');
this.querySelector('.button_seven').classList.add('tab-brg');
const tabContentItem = document.querySelector(`#${this.id}-content`);
tabContentItem.classList.add('show');
}

function removeBorder() {
tabItems.forEach(item => {
    item.classList.remove('tab-border');
    item.querySelector('.button_seven').classList.remove('tab-brg');
});
}

function removeShow() {
tabContentItems.forEach(item => {
    item.classList.remove('show');
});
}


tabItems.forEach(item => {
item.addEventListener('click', selectItem);
});