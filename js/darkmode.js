'use strict';

const lightBtn = document.querySelector('.circle');
const body = document.querySelector('body');
const darkMode = function(){
    body.style.backgroundColor = "black"; 
    body.style.transition = "1s";
    lightBtn.style.float = "right";
}

lightBtn.addEventListener('click', darkMode);

