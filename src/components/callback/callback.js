export default class Callback {
    constructor(callbackTag, popupTag) {
        this.callbackTag = document.querySelector(callbackTag);
        this.popupTag = document.querySelector(popupTag);
        this.callbackBtn = this.callbackTag.querySelector('.callback-btn');
        this.popupSubmitBtn = this.popupTag.querySelector('.callback-submit-btn');
        this.popupCloseBtn = this.popupTag.querySelector('.callback-close-btn');

        this.popupTag.classList.add('callback-popup-hide');
        this.callbackBtn.addEventListener('click', this.showPopup);
        this.popupCloseBtn.addEventListener('click', this.hidePopup);

    }

    showPopup = (e) => {
        const target = e.target;
        if (target && target.classList.contains('callback-btn')) {
            this.popupTag.classList.remove('callback-popup-none');
            this.callbackBtn.classList.add('hidden');
            this.popupTag.style.top = `${target.getBoundingClientRect().top}px`;
            this.popupTag.style.left = `${target.getBoundingClientRect().left + 150}px`;
            this.popupTag.classList.add('callback-popup-show');
            this.popupTag.classList.remove('callback-popup-hide');
        }
        
    }

    hidePopup = (e) => {
        this.callbackBtn.classList.remove('hidden');
        this.popupTag.classList.add('callback-popup-hide');
        this.popupTag.classList.remove('callback-popup-show');
        setTimeout(() => {
            this.popupTag.classList.remove('callback-popup-none');
        }, 300)
    }
}