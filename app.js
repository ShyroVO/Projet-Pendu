let dictionnaire = [
    "ARMOIRE", "ANE",
    "CHAT", "CHEVAL","CHIEN", "CLAVIER", "COQ", "CERF",
    "DODO",
    "FOU", "FONDU", "FLEUR",
    "GRAND",
    "HERO",
    "IMAGE",
    "JEROME", "JOCKEY", "JOURNAL",
    "KALEIDOSCOPE",
    "LYNX", "LOGICIEL", "LABYRINTHE",
    "MONT", "MULE",
    "OPERCULE",
    "PENDU", "PONEY","POULE", "PERDANT",
    "RENARD",
    "SEUL",
    "TRIANGLE",'TREX',
    "UTOPIQUE",
    "VACHE", "VIN",
    "ZONY", "ZORSE",
]
let life = 7;

// Select a random Words:
function getRandom(){
    return Math.floor(Math.random() * dictionnaire.length);
}

let randomWord = dictionnaire[getRandom()];
let withWord = randomWord.length;
let arrayWord = Array.from(randomWord);
let i;

for ( i = 0; i < withWord; i++) {
    let letters = document.createElement('button');

    document.getElementById('penduLetters').appendChild(letters);
    letters.innerHTML = "_";
    letters.id = "letter" + [i];
}

// Pendu Image:
let img = document.createElement("img");
img.style.width = "100%";
img.style.height = "100%";

function penduImage (pts) {
    img.src = pts +".PNG";
    document.getElementById('pendu').appendChild(img);
}

// Valeur buttons:
let valeurButton = document.getElementsByClassName('lettersBtn');

// Letters Win or Loose:
let winPts = 1;

for (let valeursButtons of valeurButton) {
    valeursButtons.addEventListener('click', function () {
        document.getElementById('console').innerHTML += " " + valeursButtons.innerHTML + " - ";

        let position = arrayWord.indexOf(valeursButtons.innerHTML);
        let idButton = document.getElementById('letter'+position);

        // Win:
        if (winPts === arrayWord.length){
            alert("Vous avez gagner !");
            window.location.reload();
        }
        // Correct letter:
        else if (arrayWord.indexOf(valeursButtons.innerHTML) >= 0 && (idButton.innerHTML !== valeursButtons.innerHTML)){
            winPts++;
            idButton.innerHTML = valeursButtons.innerHTML;
        }
        // Loose:
        else {
            penduImage(life);
            life --;

            if (life === 0) {
                alert("Vous avez perdu ! Le mot étais: " + randomWord);
                window.location.reload();
            }
        }
    })
}

// New word :
let newWordBtn = document.getElementById('newWord');

newWordBtn.addEventListener('click', function (){
    window.location.reload();
})