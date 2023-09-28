exports.dayETformatted = function(){
    const daysET = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

    let dateNow = new Date();
    //let dayNow = daysET[dateNow.getDay()];
    return daysET[dateNow.getDay()];
}