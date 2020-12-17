let dictionnaire = [
    "ARMOIRE",
    "CHEVAL", "CLAVIER",
    "FOU", "FONDU",
    "GRAND",
    "HERO",
    "IMAGINATION",
    "MONNAIE",
    "OPERCULE",
    "JEROME",
    "PENDU", "PONEY", "PERDRE",
    "ZONEZ",
]
let life = 7;

// Select a random Words:
function getRandom(){
    return Math.floor(Math.random() * dictionnaire.length);
}

let randomWord = dictionnaire[getRandom()];
let withWord = randomWord.length;

let arrayWord = Array.from(randomWord);

console.log(withWord);
console.log(arrayWord);

let i;

for ( i = 0; i < withWord; i++) {
    let letters = document.createElement('button');

    document.getElementById('penduLetters').appendChild(letters);
    letters.innerHTML = "_";
    letters.id = "'letter" + [i] + "'";

}

// Pendu Image:
let img = document.createElement("img");
img.style.width = "100%";
img.style.height = "100%";

function penduImage (pts) {
    img.src = pts +".png";
    document.getElementById('pendu').appendChild(img);
}


// Valeur buttons:
let valeurButton = document.getElementsByClassName('lettersBtn');

// Letters true or false / Win or Loose:
let winPts = 1;

for (let valeursButtons of valeurButton) {

    valeursButtons.addEventListener('click', function () {
        document.getElementById('console').innerHTML += " " + valeursButtons.innerHTML + " - ";

        // Win:
        if (winPts === arrayWord.length){
            alert("Vous avez gagner !");
            window.location.reload();
        }
        // Correct letter:
        else if (arrayWord.indexOf(valeursButtons.innerHTML) >= 0){
            winPts++;
            console.log("La lettre ce trouve dans le mot: " + arrayWord.indexOf(valeursButtons.innerHTML));
        }
        // Loose:
        else {
            penduImage(life);
            life --;
            console.log("1 vie perdu, reste:" + life + " vie.");

            if (life === 0) {
                alert("Vous avez perdu !");
                window.location.reload();
            }

        }

    })
}
