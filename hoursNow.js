exports.hoursNow = function(){
    let time = new Date();
    //let timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}