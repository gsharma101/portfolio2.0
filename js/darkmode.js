'use strict';

const lightBtn = document.querySelector('.sun');
const body = document.querySelector('body');
const nevBar = document.querySelector('.nevigation__menu');
const icons = document.querySelectorAll('.home__begin--icon');
const dmHeading = document.querySelectorAll('.darkmode__heading');
const dmParagraph = document.querySelectorAll('.darkmode__paragraph');
const nevigation = document.querySelector('.nevigation');
const nevElements = document.querySelectorAll('.nevigation__elements');
let val = 0;

const darkMode = function(){
    if(val == 0)
    {
        lightBtn.setAttribute('src','images/icons/sun.svg');
        lightBtn.classList.add('filter__change');
        // ?body
        body.style.backgroundColor = 'black';
        body.style.transition = '1s';
        body.style.color = 'white';
        // ?nevigation
        nevigation.style.backgroundColor = 'black';
        nevigation.style.transition = '1s';
        // ?nvelements
        for(let i = 0; i < nevElements.length; ++i){
            nevElements[i].style.color = 'white';
        }
         // ?Headings
         for(let i = 0; i < dmHeading.length; ++i){
            dmHeading[i].style.color = 'white';
        }
        // ?paragraph
        for(let i = 0; i < dmParagraph.length; ++i){
            dmParagraph[i].style.color = 'white';
        }
        // ?icons
        for(let i = 0; i < icons.length; ++i){
            icons[i].style.color = 'white';
        }
        ++val;
    }else{
        lightBtn.setAttribute('src','images/icons/moon.svg');
        lightBtn.classList.remove('filter__change');
        body.style.backgroundColor = 'white';
        body.style.transition = '1s';
        body.style.color = '#0e2431';
         // ?Headings
         for(let i = 0; i < dmHeading.length; ++i){
            dmHeading[i].style.color = '#0e2431';
        }
         // ?nevigation
         nevigation.style.backgroundColor = 'white';
         nevigation.style.transition = '1s';
         // ?nvelements
         for(let i = 0; i < nevElements.length; ++i){
             nevElements[i].style.color = 'black';
         }
        // ?paragraph
        for(let i = 0; i < dmParagraph.length; ++i){
            dmParagraph[i].style.color = '#0e2431';
        }
        for(let i = 0; i < icons.length; ++i){
            icons[i].style.color = '#0e2431';
        }
        --val;
    }
}

lightBtn.addEventListener('click', darkMode);