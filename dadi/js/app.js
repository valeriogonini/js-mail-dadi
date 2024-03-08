//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const dadiElement = document.getElementById("dadi")

dadiElement.addEventListener("click", function () {
    const numberOne = []
    const numberTwo = []

const randomNumberOne = Math.floor(Math.random() * 6) +1;

const randomNumberTwo = Math.floor(Math.random() * 6) +1;


console.log("Primo numero",+ randomNumberOne, "Secondo numero", + randomNumberTwo);

if (randomNumberOne > randomNumberTwo){
    console.log("Hai vinto");
} if (randomNumberOne < randomNumberTwo){
    console.log("Hai perso");
} if (randomNumberOne === randomNumberTwo) {
    console.log("pareggio");
}






})