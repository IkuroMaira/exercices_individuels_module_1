// Test des formats de date
// let test1 = new Date("14/03/2024");
// console.log(test1); // Invalid Date
// let test2 = new Date("2024/04/12");
// console.log(test2); // Valid mais pas au bon format yyyy/mm/dd 2024-04-11
// let test3 = new Date("efkjhefhekjfhkjzefhjk");
// console.log(test3); // Invalid Date
// let test4 = new Date(2024, 9, 15);
// console.log(test4); // Valid et au bon format 2024-10-14
// let test5 = new Date(23, 12, 2024);
// console.log(test5); // Valid mais pas au bon format 2024/04/11
// let test6 = new Date("2024", "9", "2");
// console.log(test6); // Valid et au bon format 2024/10/01

// new Date(year, monthIndex, day); Le mois sont numérotés à partir de 0.

// On vérifie si la date est valide au format yyyy/mm/dd

// Avec la méthode Date(year, monthIndex, day) et le format yyyy/mm/dd.
// Ça entend 3 inputs
// function isValidDate(day, month, year) {
//     // Valider si la chaîne de caractère est une date
//     console.log(day, month, year);
//     let verifyDate = new Date(year, month, day);
//     console.log(verifyDate); // Retour = 2024-10-11T22:00:00.000Z
// }
//
// let inputYear = 2024;
// let inputMonth = 9;
// let inputDay = 14;
//
// isValidDate(inputDay, inputMonth, inputYear); // 2024-10-11T22:00:00.000Z
// isValidDate(42, 15, 2024); // 2025-05-11T22:00:00.000Z -> Est indiqué comme valide

// Avec la méthode Date(dateString) mais un seul input (qui est apparemment fortement déconseillé dans le documentation MDN)
// function isValidDate(inputDate) {
//     let verifyDate = new Date(inputDate);
//     console.log("Date entrée: ",verifyDate);
//
//     // On met dans un tableau pour chercher la position (index)
//     let dateArray = inputDate.split('/');
//     console.log(dateArray);
//
//     let year = dateArray[0];
//     let month = dateArray[1];
//     let day = dateArray[2];
//     console.log(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
//
//     // On ajoute une condition pour demander le format yyyy/mm/dd
//     if (year.length === 4 || month.length === 2 || day.length === 2) {
//         console.log(true);
//         return true;
//     } else {
//         console.log(false);
//         return false;
//     }
// }

// isValidDate("2024/02/15"); // 2024-02-14T23:00:00.000Z -> yyyy-mm-dd
// isValidDate("14/02/2024"); // Invalid Date
// isValidDate("2024/42/90"); // Invalid Date
// isValidDate("2024/20/02"); // Invalid Date
// isValidDate("23456/002/003"); // +023456-02-02T23:00:00.000Z & retourne false

// ---------------------------------------------------------------------------------------------------------------------

// On vérifie si la date est valide au format dd/mm/yyyy avec les expressions régulières
function isValidDate(dateInput) {
    // Format : "DD-MM-YYYY" et "DD/MM/YYYY"
    // const regex = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/; // Si on met des tirets dans la date "dd-mm-yyyy"
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;

    if (!regex.test(dateInput)) {
        // console.log("La date n'est pas valide selon le regex");
        return false
    }

    // 1. On met dans un tableau et on indique le séparateur
    const dateArray = dateInput.split("/"); // J'ai bien 3 éléments dans mon tableau
    // const dateArray = dateInput.split("/").map(Number);
    // console.log("Dans le dateArray", dateArray);

    const day = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const year = parseInt(dateArray[2]);
    // console.log(day, month, year);

    const maxDays = maxDayInMonth(day, month, year);
    // console.log(dateInput, maxDays);
    if (maxDays === false) {
        return false;
    }

    return true;
}

function maxDayInMonth(dayEntry, monthEntry, yearEntry) {
    if (monthEntry === 2 && dayEntry > 28 ) {
        // console.log("Gérer l'année bisextile");
        let notBisextileYear = isBisextileYear(yearEntry);
        if ( notBisextileYear === false) {
            return false;
        }
    } else if (dayEntry > 30 && monthEntry >= 1 && monthEntry <= 6 && monthEntry % 2 === 0) {
        return false;
    } else if (dayEntry > 30 && monthEntry >= 7 && monthEntry <= 12 && monthEntry % 2 != 0) {
        return false;
    }
}

function isBisextileYear(yearEntry) {
    if (yearEntry % 4 != 0) { //  && yearEntry % 100 != 0 && yearEntry % 400 != 0
        return false;
    }
}

function isPalindrome(dateInput) {
    // On vérifie que la date est bonne
    if (isValidDate(dateInput) === false) {
        // console.log("Error date");
        return false
    }

    // Enlève les '/' et compare la chaîne avec son inverse
    const dateWithoutSlash = dateInput.replace(/\//g, '');
    // console.log(dateWithoutSlash);
    const dateReversed = dateWithoutSlash.split('').reverse().join('');
    // console.log(dateReversed);

    if (dateWithoutSlash === dateReversed) {
        // return "C'est un palindrome";
        return true;
    } else {
        return false;
    }
}

// TESTS :
const dates = [
    "14/02/2024", // Doit être true
    "29/02/2024", // Doit être true : année bisextile
    "29/02/2023", // Doit être false : pas une année bisextile
    "12/31/2024", // Doit être false : il n'y a pas de mois 31
    "12/12/20025", // Doit être false : pas d'année à 5 chiffres
    "31/04/2024", // Doit être false : pas 31 jours
    "31/11/2024", // Doit être false : pas 31 jours
    "03/02/2030", // Doit être true : est un palindrome
    "12/12/2024", // Doit être true
    "21/12/2112", // Doit être true : est un palindrome
]

// dates.forEach(date => {
//     console.log(`${date} => `, isValidDate(date));
// });

dates.forEach(date => {
    console.log(`${date} => `, isPalindrome(date));
});