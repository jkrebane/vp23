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
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}

const timeOfDayET = function(){
    let partOfDay = "suvaline hetk";
    let hourNow = new Date().getHours();
    if(hourNow >= 6 && hourNow < 12){
        partOfDay = "hommik";
    }
    if(hourNow >14 && hourNow < 18){
        partOfDay = "pärastlõuna"
    }
    if (hourNow >= 18){
        partOfDay = "õhtu";
    }
    return partOfDay;
}

//ekspordin mõlemad asjad
module.exports = {dateETformatted: dateETformatted, hoursNow: hoursNow, monthsET: monthNamesET, dayETformatted: dayETformatted, timeOfDayET: timeOfDayET}