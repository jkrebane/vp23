//KOIK REQUIREMENTID
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const datetime = require("./datetime_ET.js");
const semesTer = require('./semesterprog');

//LEHE BANNER JMS
const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Jörgen Kristofer Rebane, veebiprogrammeerimine 2023</title>\n</head>\n<body>';
const pageBanner = '\n\t<img src="veebjameedia_banner.png" alt="Kursuse bänner">';
const pageBody = '\n\t<h1>Jörgen Kristofer Rebane</h1>\n\t<p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatia eriala õppetöö raames.</p>';
const homePage = '\n\t<p><a href ="/"> Tagasi kodulehele</a></p>'; //et oleks lihtsam kodulehele saada
const pageFoot = '\n\t<hr>\n</body>\n</html>';

//HOMEPAGE
http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
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
		return res.end();
	}
//LISAGE OMA NIMI
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
//SEMESTER PROGRESS
    else if (currentURL.pathname === '/semesterprogress'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<p>' + semesTer.output + '</p>');
        res.write(pageFoot);
        return res.end();
	}
//TLU PICTURE
	else if (currentURL.pathname === "/tlupicture"){
		let htmlOutput = '\n\t<p> Pilti ei saa näidata!</p>';
		let listOutput ='';
		fs.readdir('public/tlupilt', (err, fileList)=>{
			if(err) {
				throw err;
			}
			else {
				let photoNum = Math.floor(Math.random() * fileList.length);
				htmlOutput = '\n\t<img src="' + fileList[photoNum] + '" alt="TLÜ pilt">';
				listOutput = '\n\t<ul>';
				for (fileName of fileList){
					listOutput += '\n\t\t<li>' + fileName + '</li>';
				}
				listOutput += '\n\t</ul>';
				tluPhotoPage(res, htmlOutput, listOutput);
			}
		});
	}

//TLU PICTURE PATH
	else if (path.extname(currentURL.pathname) === ".jpg"){
		console.log(path.extname(currentURL.pathname));
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

//VEEBIBANNER
	else if (currentURL.pathname === "/veebjameedia_banner.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
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

//SS KUI PERSES MIDAGI :/
	else {
		res.end("ERROR 404");
	}

//VALMIS, SAADA ÄRA
}).listen(5125);


//TLU PICTURE FUNCTION
function tluPhotoPage(res, htmlOut, listOutput){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBanner);
	res.write(pageBody);
	res.write(homePage);
	res.write(htmlOut)
	if(listOutput != ''){
		res.write(listOutput);
	}
	res.write(pageFoot);
	return res.end();
}

//PORT - RINDE 5100, MINA 5125