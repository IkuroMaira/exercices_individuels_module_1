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
// Regarder getDate();

// On vérifie si la date est valide au format dd/mm/aaaa

// Avec la méthode Date() et le format yyyy/mm/dd.
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

// Avec la méthode Date() mais un seul input
function isValidDate(inputDate) {
    let verifyDate = new Date(inputDate);
    console.log("Date entrée: ",verifyDate);
}

isValidDate("14/02/2024"); // Invalid Date
isValidDate("2024/02/15"); // 2024-02-14T23:00:00.000Z
isValidDate("2024/42/90"); // Invalid Date