'use strict';

const lightBtn = document.querySelector('.sun');
const body = document.querySelector('body');
const nevBar = document.querySelector('.nevigation__menu');
const icons = document.querySelectorAll('.home__social-icon');
let val = 0;

const darkMode = function(){
    if(val == 0)
    {
        lightBtn.setAttribute('src','images/icons/sun.svg');
        body.style.backgroundColor = 'black';
        body.style.transition = '1s';
        body.style.color = 'white';
        for(let i = 0; i < icons.length; ++i){
            icons[i].style.color = 'white';
        }
        ++val;
    }else{
        lightBtn.setAttribute('src','images/icons/moon.svg');
        body.style.backgroundColor = 'white';
        body.style.transition = '1s';
        body.style.color = '#0e2431';
        for(let i = 0; i < icons.length; ++i){
            icons[i].style.color = '#0e2431';
        }
        --val;
    }
}

lightBtn.addEventListener('click', darkMode);