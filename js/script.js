'use strict';
const ToggleIcon = document.getElementById('nav-toggle');
const mobileSideNev = document.getElementById('mobile__nevigation');
const mobileNev = function(){
   if(mobileSideNev.style.width == 0)
   {
    mobileSideNev.style.width = '75%';  
   }else{
    mobileSideNev.style.width = 0;
   }
}
ToggleIcon.addEventListener('click', mobileNev);