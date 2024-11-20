// On vérifie si la date est valide au format dd/mm/aaaa
// Avec la méthode Date();
// function isValidDate(inputDate) {
//     // Valider si la chaîne de caractère est une date
//     let checkDate = new Date(inputDate);
//     console.log(checkDate); // Le problème c'est que lorsqu'on rentre une date au format dd/mm/aaaa c'est invalide
// }

// new Date(year, monthIndex, day); Le mois sont numérotés à partir de 0.
// Regarder getDate();

// Test des formats de date
let test1 = new Date("14/03/2024");
console.log(test1); // Invalid Date
let test2 = new Date("2024/04/12");
console.log(test2); // Valid mais pas au bon format yyyy/mm/dd 2024-04-11
let test3 = new Date("efkjhefhekjfhkjzefhjk");
console.log(test3); // Invalid Date
let test4 = new Date(2024, 9, 15);
console.log(test4); // Valid et au bon format 2024-10-14
let test5 = new Date(23, 12, 2024);
console.log(test5); // Valid mais pas au bon format 2024/04/11
let test6 = new Date("2024", "9", "2");
console.log(test6); // Valid et au bon format 2024/10/01