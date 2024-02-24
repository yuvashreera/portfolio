import { menuBtn } from './menuHandler.js';
import { typingEffect } from './autoTypingInputHandler.js';
import { activeLink } from './activeLinkScrollHandler.js';
import { iconList } from './aboutMeIconsHandler.js';
import { skillBox } from './skillsHandler.js';
import { projectItems } from './projectsHandler.js';

document.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 'complete'){
        console.log("Data loaded sucessfully!");
        initApp();
    }
});

const initApp = ()=>{
    menuBtn();
    typingEffect();
    activeLink();
    iconList();
    skillBox();
    projectItems();
}