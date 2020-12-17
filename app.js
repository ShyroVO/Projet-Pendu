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
let winPts = 0;

for (let valeursButtons of valeurButton) {

    valeursButtons.addEventListener('click', function () {
        document.getElementById('console').innerHTML += " " + valeursButtons.innerHTML + " - ";

        let vBtn = "'" + valeursButtons.innerHTML + "'";

        // Win:
        if (winPts === arrayWord.length){
            alert("Vous avez gagner !");
            window.location.reload();
        }
        // Correct letter:
        else if (vBtn === arrayWord){
            winPts++;
            console.log("La lettre ce trouve dans le mot");
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

/*
if(){
    coupsManques++;
    document.images['pendu'].src="images/pendu_"+coupsManques+".jpg"; // On change l'image du pendu

    // Si on a raté 9 fois :
    if(coupsManques==9){
        alert("Vous avez perdu !");
        for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
        fini=true;
        // on affiche le mot, on fini le jeu
    }
}
if(lettresTrouvees==tailleMot){
    alert("Bravo ! Vous avez découvert le mot secret !");
    fini=true;
}
}
*/

// Switch image:
function imagePendu(points, img) {
    img.png = points + ".png";
}