const firstName = "Jörgen Kristofer";
const lastName = "Rebane";

console.log("Programmi autor on: " + firstName + " " + lastName);

function dateETformatted(){
	const monthNamesET =["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	//console.log(monthNamesET[1]);
	let timeNow = new Date();
	//console.log(Date());
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	//let dateET = dateNow + "." + (monthNow + 1) + "." + yearNow;
	let dateET = dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
	return dateET;
}

function dayETformatted(){
    const daysET = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

    const dateNow = new Date();
    let dayNow = daysET[dateNow.getDay()];
    return dayNow;
}

let dateETNow = dateETformatted();
let dayETNow = dayETformatted();

console.log("Täna on: " + dateETNow);
console.log("Täna on tõesti: " + dateETformatted());
console.log("Täna on: " + dayETNow);
console.log("Täna on tõesti: " + dayETformatted());
