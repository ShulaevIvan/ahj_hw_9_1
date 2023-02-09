export default class Callback {
  constructor(callbackTag) {
    this.init();
    this.callbackTag = document.querySelector(callbackTag);
    this.popupTag = document.querySelector('.callback-popup-wrap');
    this.callbackBtn = this.callbackTag.querySelector('.callback-btn');
    this.popupSubmitBtn = this.popupTag.querySelector('.callback-submit-btn');
    this.popupCloseBtn = this.popupTag.querySelector('.callback-close-btn');
    this.popupTag.classList.add('callback-popup-hide');
    this.callbackBtn.addEventListener('click', this.showPopup);
    this.popupCloseBtn.addEventListener('click', this.hidePopup);
  }

  init() {
    const callbackPopupWrap = document.createElement('div');
    const callbackPopupBody = document.createElement('div');
    const callbackHeader = document.createElement('div');
    const closeBtnWrap = document.createElement('div');
    const closeBtn = document.createElement('span');
    const textAreaWrap = document.createElement('div');
    const textarea = document.createElement('textarea');
    const submitWrap = document.createElement('div');
    const btn = document.createElement('button');
    const h3 = document.createElement('h3');
    h3.textContent = 'Напишите нам';
    btn.textContent = 'Отправить';
    btn.classList.add('callback-submit-btn');
    submitWrap.classList.add('sumbit-wrap');
    callbackPopupWrap.classList.add('close-btn-wrap');
    closeBtn.classList.add('callback-close-btn');
    callbackHeader.classList.add('callback-header');
    callbackPopupBody.classList.add('callback-popup-body');
    callbackPopupWrap.classList.add('callback-popup-wrap');
    callbackPopupWrap.classList.add('callback-popup-none');
    textAreaWrap.classList.add('callback-textarea-wrap');
    closeBtnWrap.classList.add('submit-wrap');
    closeBtnWrap.appendChild(closeBtn);
    textAreaWrap.appendChild(textarea);
    callbackHeader.appendChild(h3);
    callbackPopupBody.appendChild(callbackHeader);
    callbackPopupBody.appendChild(closeBtnWrap);
    textAreaWrap.appendChild(textarea);
    callbackPopupBody.appendChild(textAreaWrap);
    submitWrap.appendChild(btn);
    callbackPopupBody.appendChild(submitWrap);
    callbackPopupWrap.appendChild(callbackPopupBody);
    document.body.appendChild(callbackPopupWrap);
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
  };

  hidePopup = (e) => {
    this.callbackBtn.classList.remove('hidden');
    this.popupTag.classList.add('callback-popup-hide');
    this.popupTag.classList.remove('callback-popup-show');
    setTimeout(() => {
      this.popupTag.classList.remove('callback-popup-none');
    }, 300);
  };
}
