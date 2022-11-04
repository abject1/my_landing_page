// ------------------------------------ //
// ----- DECLARATION DE CONSTANTE ----- //
// ------------------------------------ //

// ----- Menu Burger ----- //

const menuBurger = document.getElementById('menuBurger');
const nav = document.getElementById('nav');
const spanTrois = document.getElementById('spanNotSeen');
const spanUn = document.getElementById('spanUn');
const spanDeux = document.getElementById('spanDeux');

// ----------------------------- //
// ----- FIN DES CONSTANTE ----- //
// ----------------------------- //

// ------------------------------------------ //
// ----- FETCH DE L'API DES PERSONNAGES ----- //
// ------------------------------------------ //

const url = 'https://hp-api.herokuapp.com/api/characters';
const div = document.getElementById("personnageDifferente");

// * Tu déclares une fonction asynchrone
const getCharacter = async () => {
  // * Tu tentes de récupérer la donnée
  try {
    // * Tu fetch l'url
    const response = await fetch(url);
    // * Tu récupères la donnée en json
    const data = await response.json();
    // * Tu log la donnée
    for (i = 0; i < 25; i++) {
        // console.log(data[i]);
        div.innerHTML += `
        <div class="card">
            <h2>${data[i].name}</h2>
            <img src="${data[i].image}" alt="Photo de ${data[i].name}">
            <h3>Spécimen : ${data[i].species} | Genre : ${data[i].gender}</h3>
            <h3 class="dateNaissance">Date de Naissance : ${data[i].dateOfBirth}</h3>
            <h4>Maison : ${data[i].house} | Patronus : ${data[i].patronus}</h4>
            <h5>${data[i].name} est un(e) sorcier / sorcière ? ${data[i].wizard === true ? 'Oui' : 'Non'}</h5>
            <h5>Moldus : ${data[i].ancestry === 'muggleborn' ? 'Oui' : 'Non'}</h5>
            <ul>
                <li>Etudiant : ${data[i].hogwartsStudent === true ? 'Oui' : 'Non'}</li>
                <li>Proffeseur : ${data[i].hogwartsStaff === true ? 'Oui' : 'Non'}</li>
            </ul>
            <div class="descPhys">
                <h5>Couleur des yeux : ${data[i].eyeColour}</h5>
                <h5>Couleur des cheveux : ${data[i].hairColour}</h5>
            </div>
            <div class="wand">
                <h4>Baquette</h4>
                <h5>Bois : ${data[i].wand.wood}</h5>
                <h5>Coeur : ${data[i].wand.core}</h5>
                <h5>Longueur : ${data[i].wand.length}</h5>
            </div>
        </div>
        `
    } 
  } catch (error) {
    // * S'il y a une erreur tu log une nouvelle instance de l'objet Error
    throw new Error(error.message || error);
    }

};

getCharacter();

// ---------------------------------------------- //
// ----- END FETCH DE L'API DES PERSONNAGES ----- //
// ---------------------------------------------- //

// ------------------------------------ //
// ----- FETCH DE L'API DES SORTS ----- //
// ------------------------------------ //

const url2 = 'https://hp-api.herokuapp.com/api/spells';
const div2 = document.getElementById("spellsDifferente");

const getCharacter2 = async () => {
    try {
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        for (i = 0; i < data2.length; i++) {
            // console.log(data2);
            div2.innerHTML += `
            <div class="spells">
                <h4>${data2[i].name}</h4>
                <p>${data2[i].description}</h4>
            </div>
            `
        }
    } catch (error) {
        throw new Error(error.message || error);
    }
};

getCharacter2();

// ---------------------------------------- //
// ----- END FETCH DE L'API DES SORTS ----- //
// ---------------------------------------- //

// ----------------------- //
// ----- MENU BURGER ----- //
// ----------------------- //

menuBurger.addEventListener('click', () => {
    nav.classList.toggle('navSeen');
    spanTrois.classList.toggle('spanNotSeen');
    spanUn.classList.toggle('spanRotateUn');
    spanDeux.classList.toggle('spanRotateDeux');
})

// -------------------------- //
// ----- END MENU BURGER ---- //
// -------------------------- //