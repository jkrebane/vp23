const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateETformatted = function(){
    //const monthNamesET =["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const dayETformatted = function(){
    const daysET = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    let dateNow = new Date();
    //let dayNow = daysET[dateNow.getDay()];
    return daysET[dateNow.getDay()];
}

const hoursNow = function(){
    let time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
	const minutes = String(time.getMinutes()).padStart(2, '0');
	const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
    //return time.getHours() + ":" + time.getMinutes()// + ":"; + time.getSeconds();
}

const timeOfDayET = function(){
    let partOfDay = "suvaline hetk";
    let hourNow = new Date().getHours();
    if(hourNow >= 6 && hourNow < 10){
        partOfDay = "Hommik";
    }
    if(hourNow >= 10 && hourNow < 14){
		partOfDay = "lõuna";
	}
    if(hourNow >= 14 && hourNow < 18){
        partOfDay = "Pärastlõuna"
    }
    if (hourNow >= 18){
        partOfDay = "Õhtu";
    }
    return partOfDay;
}

//ekspordin
module.exports = {dateETformatted: dateETformatted, hoursNow: hoursNow, dayETformatted: dayETformatted, timeOfDayET: timeOfDayET}