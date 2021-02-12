'use strict'

const app = async() => {
    const database = await fetch("https://character-database.becode.xyz/characters" );
    let charactersInApi = await database.json();
    console.table(charactersInApi);
    console.log(charactersInApi);
    console.log(charactersInApi.map(item => item.name));

    charactersInApi.forEach(item => {

        // ADD CLASS IN CONTAINER
        let container = document.querySelector(".container");

        // CREATES HTML ELEMENTS
        let boxHeroes = document.createElement('div');
        let boxBtnDelete = document.createElement('div');
        let btnInfo = document.createElement('button');
        let btnInfoIcon = document.createElement('i');
        let btnDelete = document.createElement('button');
        let btnDeleteIcon = document.createElement('i');
        let boxImgHeroes = document.createElement('div');
        let imgHeroes = document.createElement('img');
        let boxNameHeroes = document.createElement('div');
        let nameHeroes = document.createElement('h2');
        let pDescription = document.createElement('p');
        let btnEdit = document.createElement('button');
        let btnEditIcon = document.createElement('i');

        // APPEND CHILD
        container.appendChild(boxHeroes).classList.add("card__Heros");
        boxHeroes.appendChild(boxBtnDelete).classList.add("boxBtnDelete");
        boxBtnDelete.appendChild(btnInfo).classList.add("info");
        btnInfo.appendChild(btnInfoIcon).classList.add("fas");
        btnInfoIcon.classList.add("fa-info");
        boxBtnDelete.appendChild(btnDelete).classList.add("delete");
        btnDelete.appendChild(btnDeleteIcon).classList.add("fas");
        btnDeleteIcon.classList.add("fa-user-slash");
        boxHeroes.appendChild(boxImgHeroes).classList.add("box__Img--Heros");
        boxImgHeroes.appendChild(imgHeroes);
        imgHeroes.src = 'data:image/jpg;base64,' + item.image;
        boxHeroes.appendChild(boxNameHeroes).classList.add("boxH2");
        boxNameHeroes.appendChild(nameHeroes);
        nameHeroes.textContent = item.name;
        boxHeroes.appendChild(pDescription);
        pDescription.textContent = item.shortDescription;
        boxHeroes.appendChild(btnEdit).classList.add("edit");
        btnEdit.textContent = "EDIT ";
        btnEdit.appendChild(btnEditIcon).classList.add("fas");
        btnEditIcon.classList.add("fa-user-edit");
        }
    )
}

app();

