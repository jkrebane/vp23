const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const datetime = require("./datetime_ET.js");
const semesTer = require('./semesterprog');
const tluphoto = '\n\t<img src="tlu_43.jpg" alt="Pilt Tallinna Ülikoolist">';
const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Jörgen Kristofer Rebane, veebiprogrammeerimine 2023</title>\n</head>\n<body>';
const pageBanner = '\n\t<img src="veebjameedia_banner.png" alt="Kursuse bänner">';
const pageBody = '\n\t<h1>Jörgen Kristofer Rebane</h1>\n\t<p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatia eriala õppetöö raames.</p>';
const homePage = '\n\t<p><a href ="/"> Tagasi kodulehele</a></p>'; //et oleks lihtsam kodulehele saada
const pageFoot = '\n\t<hr>\n</body>\n</html>';

http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	//console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi</a>!</p>');
		res.write('\n\t<p>Lehe avamise hetkel oli kell:' + datetime.hoursNow() + ' Ja aeg oli: ' + datetime.timeOfDayET() + '</p>'); 
		res.write('\n\t<p><a href="semesterprogress">Semestri progress</a></p>');
		res.write('\n\t<p><a href="tlupicture">Üks pilt Tallinna Ülikoolist</a></p>');
		res.write(pageFoot);
		//console.log("Keegi vaatab!");
		return res.end();
	}
	
	else if (currentURL.pathname === "/addname"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write(homePage);
		res.write('\n\t<hr>\n\t<h2>Lisa palun oma nimi</h2>');
		res.write('\n\t<p>Edaspidi lisame siia asju!</p>');
		res.write(pageFoot);
		return res.end();
	}

    else if (currentURL.pathname === '/semesterprogress'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<p>' + semesTer.output + '</p>');
        res.write(pageFoot);
        return res.end();
	}

	else if (currentURL.pathname === "/tlupicture"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write(homePage);
		res.write(tluphoto);
		res.write(pageFoot);
		return res.end();
	}

	else if (currentURL.pathname === "/tlu_43.jpg"){
		console.log("Tahame pilti!");
		let picturePath = path.join(__dirname, "public", "tlupilt");
		//console.log(bannerPath + currentURL.pathname);
		fs.readFile(picturePath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				console.log("Tuli ära!");
				res.writeHead(200, {"Content-type": "image/jpg"});
				res.end(data);
			}
		});
	}
	
	else if (currentURL.pathname === "/veebjameedia_banner.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		//console.log(bannerPath + currentURL.pathname);
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				console.log("Tuli ära!");
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});
	}
	else {
		res.end("ERROR 404");
	}
	//valmis, saada ära
}).listen(5125);

//portid - rinde 5100, mina 5125