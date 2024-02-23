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
}

// Menu Button Functionalities for smaller device
function menuBtn(){
    let menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click',function(){
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('fa-xmark');
    });
}

// Typing Effect
function typingEffect(){
    new Typed('.autoInput',{
        strings : ["Software Engineer","Freelancer!","Want to Become a Front End Developer!"],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 2000,
        loop : true
    });
}

// Active link state on scroll
function activeLink() {
    // Get all Links
    let navLinks = document.querySelectorAll('nav ul li a');
    // Get all Articles
    let articles = document.querySelectorAll('article');

    window.addEventListener('scroll', function () {
        const scrollPosition = this.window.scrollY;
        articles.forEach((article) => {
            const articleId = article.getAttribute('id');
            if (
                scrollPosition > article.offsetTop &&
                scrollPosition < article.offsetTop + article.offsetHeight
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    
                    // Adjusted the condition to check if the link's href matches the article's ID
                    if (link.getAttribute('href') === `#${articleId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}
