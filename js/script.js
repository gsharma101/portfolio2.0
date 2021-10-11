'use strict';
const ToggleIcon = document.getElementById('nav-toggle');
const mobileSideNev = document.getElementById('mobile__nevigation');
const mobileNev = function(){
    mobileSideNev.style.display= 'block';
}
ToggleIcon.addEventListener('click', mobileNev);