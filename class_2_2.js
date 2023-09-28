const firstName = "Jörgen Kristofer";
const lastName = "Rebane";
const dateValue = require("./date_et");
const dayValue = require("./day_et");
const timeValue = require("./hoursNow")

console.log("Programmi autor on: " + firstName + " " + lastName);
console.log("Täna on : " + dayValue.dayETformatted() + " " + dateValue.dateETformatted() + ". Kell on: " + timeValue.hoursNow());