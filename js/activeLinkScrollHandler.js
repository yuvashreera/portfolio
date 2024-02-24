// Active link state on scroll
export function activeLink() {
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