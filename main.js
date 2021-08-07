
const houseArray = [
    {
        houseName: "Gryffindor",
        houseId: 1,
        imageUrl: "https://rlv.zcache.com/harry_potter_gryffindor_lion_crest_classic_round_sticker-r9a9082c138ec425fb25f5e1abe1d6e79_0ugmp_8byvr_704.webp"
    },
    {   
        houseName: "Hufflepuff",
        houseId: 2,
        imageUrl: "https://rlv.zcache.com/harry_potter_hufflepuff_crest_with_badger_classic_round_sticker-r834d3d98ddb0487b9be53d3abbe0976e_0ugmp_8byvr_704.webp"
    },
    {
        houseName: "Ravenclaw",
        houseId: 3,
        imageUrl: "https://rlv.zcache.com/harry_potter_ravenclaw_crest_classic_round_sticker-rbe9d33cc986f484b9c55764a1acef348_0ugmp_8byvr_540.webp"
    },
    {
        houseName: "Slytherin",
        houseId: 4,
        imageUrl: "https://rlv.zcache.com/harry_potter_slytherin_crest_classic_round_sticker-r4da2fd21b87f44a3898cf6c3d996b9f5_0ugmp_8byvr_704.webp"
    }
];

const sortHouse = () => {
    let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
    return randomHouse
}


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
    <div class="instructions">
    <p class="this-is-sorting-hat">This is the sorting hat.</p>
    <img class="sorting-hat" src="https://assets.mugglenet.com/wp-content/uploads/2020/05/The-Sorting-Hat.png" alt="Sorting hat from Harry Potter" width="300" height="200">
    <p class="how-to">Listen carefully:
    Enter your name in the box below, and the sorting hat decide your house</p>
    </div>
    <div id="newDivForm" class="form-design">
    <form id="nameFormForm" class="form-design-new">
    <div class="mb-3">
    <label for="name"class="form-label">Name</label>
    <input required type="text"  placeholder="Luna Lovegood" class="form-control" id="name">
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
    const {houseName, imageUrl} = sortHouse()
     let addStudent = {
      name: document.querySelector("#name").value,
      house: houseName,
      imageUrl: imageUrl
    };

    studentArray.push(addStudent);
    addCardToDom(studentArray);

    document.querySelector("#nameFormForm").reset() 

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
    `<div class="card" style="width: 10rem;">
    <img src=${obj.imageUrl} class="card-img-top" alt="${obj.house}">
    <div class="card-body">
        <h5 class="card-title">${obj.house}!</h5>
        <p class="card-text">${obj.name}</p>
        <button type="button" class="btn btn-primary">Expell</button>
    </div>
    </div>`;
    })

    renderToDom("#first-yr-div", houseCard);
    
}

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

const onit = () => {
    welcomebtn();
    buttonEvents();
}

onit();