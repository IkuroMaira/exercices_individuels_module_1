// Étape 2
/*let firstname = "Beyonce"

let message = `Bonjour ${firstname} !`
console.log(message)*/

// Étape 3
/*function sayHello(firstname) {
    let message = `Bonjour ${firstname} !`
    console.log(message)
}

sayHello("Beyonce")*/

// Étape 4
/*function sayHello(firstname, hour) {
    // let message = `Bonjour ${firstname} !`

    if (hour < 18) {
        console.log(`Bonjour ${firstname} !`)
    } else {
        console.log(`Bonsoir ${firstname} !`)
    }

    // console.log(message)
}

sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);*/

// BONUS Étape 5
// HTML, liaison avec JavaScript

//BONUS Étape 6
// Première manipulation du DOM

function sayHello(firstname, hour) {

    if (hour < 18) {
        document.querySelector('h1').innerText = `Bonjour ${firstname} !`
    } else {
        document.querySelector('h1').innerText = `Bonsoir ${firstname} !`
    }
}

// Récupérer le prénom
let firstname = prompt("Quel est votre prénom ?")

// Récupérer l'heure actuelle
let hour = new Date().getHours()

sayHello(firstname, hour)