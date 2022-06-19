'use strict';

const lightBtn = document.querySelector('.circle');
const body = document.querySelector('body');
const darkMode = function(){
    body.classList.toggle('body__change');
    lightBtn.classList.toggle('circle__change');
}

lightBtn.addEventListener('click', darkMode);

