// Dynamic Projects Handler in the Protfolio Section
export function projectItems(){
    // Defining Project Items
    const projectItems = [
        {
            imageSrc : "./images/foodcourt.png",
            projectName : "Food Court",
            description : "In my Food Court project, I crafted an engaging online platform for food enthusiasts. Utilizing my expertise in front-end development, I created visually appealing interfaces with seamless navigation. The project showcases my skills in web design and development, offering users a delightful experience in exploring and ordering from a variety of delectable food options." 
        }
    ];
    // Fetching container
    const container = document.querySelector('.portfolio-row');

    // Iterating each projects
    projectItems.forEach((project)=>{
        const div = document.createElement('div');
        div.classList.add('portfolio-item');
        div.innerHTML = `
            <figure class="portfolio-img">
                <img src=${project.imageSrc} alt=${project.projectName}>
            </figure>
            <div class="portfolio-info">
                <h3>${project.projectName}</h3>
                <p>${project.description}</p>
                <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        `;
        // Appending the projects in the container
        container.appendChild(div);
    });
}