let dictionnaire = ["ARMOIRE", "CHEVAL", "JEROME", "PONEY", "ZONEZ"]

// random Words:
function getRandom(){
    return Math.floor(Math.random() * dictionnaire.length);
}

let randomWord = dictionnaire[getRandom()];
let withWord = randomWord.length;

console.log(withWord);

for (let i = 0; i < withWord; i++) {
    let letters = document.createElement('button');

    document.getElementById('penduLetters').appendChild(letters);
    letters.innerHTML = "_";
    let classe = "'" + i + "'";
    letters.classList.add(classe);

}

// Valeur buttons:
let valeurButton = document.getElementsByClassName('lettersBtn');

// Letters utilisé Affichage:
for (let valeursButtons of valeurButton) {

    valeursButtons.addEventListener('click', function () {
        console.log(randomWord);




        document.getElementById('console').innerHTML += " " + valeursButtons.innerHTML + " - ";
        document.getElementsByClassName(1);

        


        if (randomWord.includes("'" + valeursButtons + "'")){
            console.log("La lettre ce trouve dans le mot");
        }






    })

}
