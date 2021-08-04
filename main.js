
const houseArray = [
    {
        houseName: "Gryffindor",
        houseId: 1,
        imageUrl: "https://thenichollsworth.com/wp-content/uploads/2020/11/C0441055-AEE4-4C0D-8F43-A708DDEB6C3B-721x900.jpeg"
    },
    {   
        houseName: "Hufflepuff",
        houseId: 2,
        imageUrl: "https://cdn.shopify.com/s/files/1/1541/8579/files/Hufflepuff-harry_potter_large.JPG?v=1491538917"
    },
    {
        houseName: "Ravenclaw",
        houseId: 3,
        imageUrl: "https://static.wikia.nocookie.net/hogwartsahistory/images/e/ef/Ravenclaw-crest.jpg/revision/latest?cb=20100819014614"
    },
    {
        houseName: "Slytherin",
        houseId: 4,
        imageUrl: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.jpg?c=2"
    }
];

let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

//  displays welcome btn to DOM 
const welcomebtn = () => {
    const btnstring =
        `<button type="button" id="welcome" class="welcomebtn btn btn-primary btn-lg">START SORTING</button> `

    renderToDom("#start-button", btnstring)
};


const buildForm = ("click", function (){
    const nameForm =`
    
    <div id="newDivForm">
    <form id="nameFormForm">
    <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input required type="text" class="form-control" id="name">
    </div>
    <button type="submit" id="submit-btn" class="btn btn-primary">Submit</button>
    </form>
    </div>`

    renderToDom("#form-div", nameForm) 
    
    const formElement = document.querySelector("#newDivForm");
    formElement.addEventListener("submit", handleFormSubmit);

 
})

const studentArray = []

const handleFormSubmit = (event) => {
    event.preventDefault();

     let addStudent = {
      name: document.querySelector("#name").value,
      house: randomHouse.houseName,
      imageUrl: randomHouse.imageUrl
    };

    studentArray.push(addStudent);
    addCardToDom(studentArray);

    document.querySelector("#name").reset
    

}

const btnClickEvent = (event) =>{
    if(event.target.id === "welcome"){
        buildForm();
        const removeButton = document.querySelector("#start-button")
        removeButton.remove()
    }
};

const buttonEvents = () => {
    document
      .querySelector("#start-button")
      .addEventListener("click", btnClickEvent);

      document.querySelector("#first-yr-div").addEventListener("click", expellStudent);
  };



const addCardToDom= (array) => {
    let houseCard = ""
    array.forEach((obj) => {
    houseCard += 
    `<div class="card" style="width: 18rem;">
    <img src=${obj.imageUrl} class="card-img-top" alt="${obj.house}">
    <div class="card-body">
        <h5 class="card-title">${obj.house}!</h5>
        <p class="card-text">${obj.name}</p>
        <button type="button" class="btn btn-primary">Delete</button>
    </div>
    </div>`;
    })

    renderToDom("#first-yr-div", houseCard);
    
}

let voldyArmy = []

const addExpellCardToDom= (array) => {
    let expellCard = ""
    array.forEach((obj) => {
    expellCard += 
    `<div class="card" style="width: 18rem;">
    <img src=${obj.imageUrl} class="card-img-top" alt="${obj.house}">
    <div class="card-body">
        <h5 class="card-title">${obj.house}!</h5>
        <p class="card-text">${obj.name}</p>
    </div>
    </div>`;
    })

    renderToDom("#voldy-army-div", expellCard);
    
}

const expellStudent = (event) => {
    const targetId = event.target.id
    const targetType = event.target.type

    if (targetType === "button") {
        let expelledStudent = studentArray.splice(targetId, 1)
        addCardToDom(studentArray)
        voldyArmy += expellStudent
 
    }
    console.log(voldyArmy)
}

const onit = () => {
    welcomebtn();
    buttonEvents();
}

onit();