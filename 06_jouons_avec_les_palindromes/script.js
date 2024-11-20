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

// On vérifie si la date est valide au format dd/mm/yyyy avec les expressions régulières
function isValidDate(dateInput) {
    // Format : "DD-MM-YYYY"
    const regexUseDashes = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/;
    // Format : DD/MM/YYYY
    const regexUseSlashes = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/\d{4}$/;

    return regexUseSlashes.test(dateInput);
}

console.log(isValidDate("14/02/2024")); // false
// console.log(isValidDate("14-02-2024")); // false