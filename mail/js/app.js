
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
const arreyName = ["valerio@gmail.com", "marco@gmail.com", "edoardo@gmail.com"];


const buttonElement = document.getElementById("submit")



buttonElement.addEventListener("click", function () {

    const emailElement = document.getElementById("email").value
    let nameSection = false;


    for (let i = 0; i < arreyName.length; i++) {
        const arreyNameTrue = arreyName[i]

        if (emailElement === arreyNameTrue) {
            let nameSection = true;

        }

    }

    if (nameSection === true) {
        console.log("email nella lista")
    } else {
        console.log("email non nella lista");
    }

})



