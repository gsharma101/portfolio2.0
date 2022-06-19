'use strict';

const lightBtn = document.querySelector('.sun');
const body = document.querySelector('body');
let val = 0;

const darkMode = function(){
    if(val == 0)
    {
        lightBtn.setAttribute('src','images/icons/sun.svg');
        body.style.backgroundColor = 'black';
        body.style.transition = '1s';
        ++val;
    }else{
        lightBtn.setAttribute('src','images/icons/moon.svg');
        body.style.backgroundColor = 'white';
        body.style.transition = '1s';
        --val;
    }
}

lightBtn.addEventListener('click', darkMode);