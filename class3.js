const firstName = "Jörgen Kristofer";
const lastName = "Rebane";
const dateTimeValue = require("./datetime_ET");
const fs = require ("fs");
//let folkWisdom = "";

fs.readFile("txtfiles/vanasonad.txt", "utf8", (err, data)=>{
    if (err){
        console.log(err);
    }
    else {
        //console.log(data);
        //folkWisdom = data;
        onScreen(data);
    }
});//readfile lõpeb

const onScreen = function(folkWisdom){
    console.log("Programmi autor on: " + firstName + " " + lastName);
    console.log("Täna on: " + dateTimeValue.dateETformatted() + ". " + dateTimeValue.dayETformatted())
    //console.log(folkWisdom);
    let folkWisdoms = folkWisdom.split(";");
    //console.log(folkWisdoms);
    //console.log(folkWisdoms.length);
    //console.log("Tänane tarkus: " + folkWisdoms[Math.floor(Math.random() * folkWisdoms.length)]);
    //kõige tavalisem for tsükkel (loop)
    for (let i = 0; i < folkWisdoms.length; i ++){
        console.log("Vanasõna nr " + (i +1) + ': "' + folkWisdoms[i] + '"');
    }
    console.log("Kell on: " + dateTimeValue.hoursNow());
    console.log("Praegu on " + dateTimeValue.timeOfDayET() + ".");
    //console.log(dateTimeValue.monthsET);
}