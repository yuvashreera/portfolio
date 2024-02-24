// Menu Button Functionalities for smaller device
export function menuBtn(){
    let menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click',function(){
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark');
    });
}