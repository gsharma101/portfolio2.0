'use strict';
const ToggleIcon = document.getElementById('nav-toggle');
const IconImage = document.getElementById('mobile__menu__image');
const mobileSideNev = document.getElementById('mobile__nevigation');
const nevItems = document.querySelectorAll('.mobile__nevigation--items');
const nevLinks = document.querySelectorAll('.mobile__nevigation--links');


const mobileNev = function(){
  mobileSideNev.classList.toggle('width__display');
  for(let i=0;i<nevItems.length;++i){
    nevItems[i].classList.toggle('nevDisp');
  }

  if(IconImage.classList.contains('bx-x-circle')){
   IconImage.classList.remove('bx-x-circle');
   IconImage.classList.add('bx-menu');
   
  }else{
   IconImage.classList.add('bx-x-circle');
   IconImage.classList.remove('bx-menu');
  }
}

for(let i = 0; i < nevLinks.length; ++i){
    nevLinks[i].addEventListener('click',mobileNev);
}

ToggleIcon.addEventListener('click', mobileNev);