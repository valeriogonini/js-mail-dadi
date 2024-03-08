
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const emailElement = document.getElementById("email")
const buttonElement = document.getElementById("submit")

console.log(buttonElement, emailElement,)
const nameElement = document.getElementById("name")
console.log(nameElement)

buttonElement.addEventListener("click", function() {
;

const nameElementSection = parseInt(nameElement.value);

const arreyName = ["valerio", "marco", "edoardo"];


let nameSection = true;


for (let i = 0; i < arreyName.length; i++) {
const arreyNameTrue = arreyName[i]
let nameSection = false;

}

if (nameSection === arreyName) {
    console.log("Nome nella lista")
} if (nameSection != arreyName) {
    console.log("Nome non nella lista");
}

})



