let dictionnaire = ["ARMOIRE", "CHEVAL", "JEROME", "PONEY", "ZONEZ"]

// random Words:
function getRandom(){
    return Math.floor(Math.random() * dictionnaire.length);
}

let randomWord = dictionnaire[getRandom()];

for () {

    let letters = document.createElement('button');
    document.getElementById('penduLetters').appendChild(letters);

}

// Valeur buttons:
let valeurButton = document.getElementsByClassName('lettersBtn');

// Letters utilisé Affichage:
for (let valeursButtons of valeurButton) {


    valeursButtons.addEventListener('click', function () {
        document.getElementById('console').innerHTML += " " + valeursButtons.innerHTML + " - ";

        let valeurSearch = "'" + valeursButtons + "'";

        if (randomWord.includes(valeurSearch)){


        }






    })

}
