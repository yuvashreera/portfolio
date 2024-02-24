// Dynamic function for handling skills
export function skillBox(){
    // Defining skill items
    const skillItems = [
        // HTML
        {
        language : "HTML" ,
        rating : "85%",
        width :"85%"
        },
        // CSS
        {
        language : "CSS & CSS3" ,
        rating : "85%",
        width :"85%"
        },
        // JAVASCRIPT
        {
        language : "JAVASCRIPT" ,
        rating : "85%",
        width :"85%"
        },
        // GIT & GITHUB
        {
        language : "GIT & GITHUB" ,
        rating : "100%",
        width :"100%"
        },
        // AGILE METHODOLOGIES
        {
        language : "AGILE METHODOLOGIES" ,
        rating : "80%",
        width :"80%"
        },
        // JSON
        {
        language : "JSON" ,
        rating : "100%",
        width :"100%"
        },
        // Boostrap
        {
        language : "Boostrap" ,
        rating : "75%",
        width :"75%"
        },
    ];
    // Fetching container
    const container = document.querySelector('.skill-row');
    // Iterating each skills
    skillItems.forEach((skills)=>{
        const div = document.createElement('div');
        div.classList.add('skill-box');
        div.innerHTML = `
            <div class="skill-info">
                <h2>${skills.language}</h2>
                <h2>${skills.rating}</h2>
            </div>
            <div class="skill-outer-line">
                <div class="skill-inner-line" style="width:${skills.width}"></div>
            </div>
        `;
        // Appending the skills in the container
        container.appendChild(div);
    });
}