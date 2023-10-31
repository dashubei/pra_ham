'use strict';

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overLay = document.querySelector('.sp-overlay');

    open.addEventListener('click', () => {
        overLay.classList.add('active-overlay');
    });

    close.addEventListener('click', () => {
        overLay.classList.remove('active-overlay');
    });
}