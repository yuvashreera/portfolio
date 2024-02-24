
// Dynamic function for iterating icon list...

// Function to populate left and right icon lists
export function iconList(){
    // Left Icon List....

    // Left Container
    const iconsLeftList = document.querySelector('.icons-list__Left');
    //  Left Data
    const leftIconsBio = {
        Birthday : "30th October 2000",
        Email : "yuvashreera@gmail.com",
        City : "Madurai, TamilNadu, India"
    };
    createIconList(iconsLeftList,leftIconsBio);
    
    // Right Icon List ...

    // Right Container
    const iconsRightList = document.querySelector('.icons-list__right');
    //  RIght Data
    const rightIconsBio = {
        Age : 23,
        Degree : "BE Computer Science",
        Freelance : "Available"
    };
    createIconList(iconsRightList,rightIconsBio);
}

// Function to create and append an icon list based on the provided data
function createIconList(container,iconData){
    const ul = document.createElement('ul');
    for(let element in iconData){
        ul.innerHTML += `
            <li><i class="fa-solid fa-angle-right"></i><strong>${element} :</strong>
                    <span>${iconData[element]}</span></li>`;
    };
    container.appendChild(ul);
}