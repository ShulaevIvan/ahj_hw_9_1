import Collapse from '../components/collapse/collapse';
import Callback from '../components/callback/callback';

window.addEventListener('DOMContentLoaded', (e) => {
    const collapse = new Collapse('.app-container-collapse');
    const callback = new Callback('.callback-main-wrap', '.callback-popup-wrap');
});