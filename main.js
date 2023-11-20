'use strict';

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overLay = document.querySelector('.sp-overlay');
    const spans = document.querySelectorAll('.ham');
    const pra = document.getElementById('pra');

    open.addEventListener('click', () => {
        overLay.classList.add('active-overlay');
    });

    close.addEventListener('click', () => {
        overLay.classList.remove('active-overlay');
    });

    pra.addEventListener('click', () => {
        spans.forEach((span) => {
            span.classList.toggle('active');
        });
    });
}