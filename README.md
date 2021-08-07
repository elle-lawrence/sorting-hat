# The Sorting Hat Project [![Netlify Status](https://api.netlify.com/api/v1/badges/07510251-39a9-46b7-b118-e190bf559296/deploy-status)](https://app.netlify.com/sites/elles-sorting-hat-project/deploys)

This project is a single page application with CRUD components. For practice on writing dynamic JS code that takes inputs via form and creates components with styling based on conditionals.

[View App](https://elles-sorting-hat-project.netlify.app/)

## Get Started 
git@github.com:elle-lawrence/sorting-hat.git

## About the User 
- The ideal user for this application is a yound wizard entering their first year at Hogwarts School of Witchcraft and Wizardry.
- They are students in their first year of becoming a wizard and need to know what house they will be in.
- The problem this app solves for them is it allows for antiqued //and non-hygenic,,, really its gross// tools of the past to be retired and replaced with modern day technologies.

## Features
- When a new student enters their name they are added added as an object along with a randomized house assignment. That then prints to the info to the DOM in a beautiflly styled card.
- House Crests: The crest of the student's card changes depending on which house they were sorted.
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These are styled differently from Hogwarts students.
- Responsive design for smaller screens

## Video Walkthrough of Sorting Hat
https://www.loom.com/share/48e7265098244ed9b3ae92f8d6c263c4

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://elles-sorting-hat-project.netlify.app/)
- [Wireframes](https://www.figma.com/proto/W1wiUdZ631HOAJYhgaAByn/Sorting-Hat?node-id=2%3A2)
- [Project Board](https://github.com/elle-lawrence/sorting-hat/projects/2)

## Code Snippetg
let voldyArmy = []

const addExpellCardToDom = (array) => {
    let expellCard = ""
    array.forEach((obj) => {
    expellCard += 
    `<div class="card" style="width: 10rem;">
    <img src="https://static2.srcdn.com/wordpress/wp-content/uploads/2017/12/Voldemort-and-the-Death-Eaterss.jpg" class="card-img-top" alt="${obj.house}">
    <div class="card-body voldy-card">
        <h5 class="card-title">Dark days are upon us!</h5>
        <p class="card-text">Sadly, <strong>${obj.name}</strong> has gone to the darkside.</p>
    </div>
    </div>`;
    })

    renderToDom("#voldy-army-div", expellCard);
    
}

const expellStudent = (event) => {
    const targetId = event.target.id
    const targetType = event.target.type

    if (targetType === "button") {
        voldyArmy.push(studentArray.splice(targetId, 1)[0])      
        addCardToDom(studentArray)
        addExpellCardToDom(voldyArmy)
    }
}

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [Elle Lawrence](https://github.com/elle-lawrence)
