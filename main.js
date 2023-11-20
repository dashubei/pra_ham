'use strict';

{

    const overLay = document.querySelector('.sp-overlay');
    const spans = document.querySelectorAll('.ham');
    const pra = document.getElementById('pra');
    
    pra.addEventListener('click', () => {
        spans.forEach((span) => {
            span.classList.toggle('active');
            overLay.classList.toggle('active-overlay');
        });
    });
}