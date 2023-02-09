export default class Collapse {
  constructor(containerTag) {
    this.container = document.querySelector(containerTag);
    this.btns = Array.from(this.container.querySelectorAll('.collapse-btn'));
    this.colapseBodys = Array.from(this.container.querySelectorAll('.collapse-body'));
    this.id = 0;

    this.btns.forEach((btn, i) => {
      this.id += 1;
      btn.setAttribute('collapse-id', this.id);
      btn.addEventListener('click', this.showBody);
      this.colapseBodys[i].setAttribute('collapse-body-id', this.id);
      this.colapseBodys[i].classList.add('collapse-body-hide');
      this.colapseBodys[i].classList.add('collapse-body-none');
    });
  }

  showBody(e) {
    e.preventDefault();
    this.targetEl = e.target;
    this.bodyId = this.targetEl.getAttribute('collapse-id');
    if (this.targetEl && this.targetEl.classList.contains('collapse-btn') && this.bodyId) {
      const body = document.querySelector(`[collapse-body-id="${this.bodyId}"]`);
      if (body.classList.contains('collapse-body-hide')) {
        body.classList.remove('collapse-body-none');
        body.classList.add('collapse-body-show');
        body.classList.remove('collapse-body-hide');
      } else if (body.classList.contains('collapse-body-show')) {
        body.classList.add('collapse-body-hide');
        body.classList.remove('collapse-body-show');
        setTimeout(() => { body.classList.add('collapse-body-none'); }, 200);
      }
    }
  }
}
