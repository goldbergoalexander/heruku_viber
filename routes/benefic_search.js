'use strict';
const
util = require('util'),
keyboard = require('./keyboards.js'),
axios = require('axios'),
response1 = require('../index.js'),
obj = require('../index.js'),
ViberBot = require('viber-bot').Bot,
BotEvents = require('viber-bot').Events,
TextMessage = require('viber-bot').Message.Text,
KeyboardMessage = require('viber-bot').Message.Keyboard,
winston = require('winston'),
toYAML = require('winston-console-formatter');

function createLogger() {
    const logger = winston.createLogger({
        level: "debug" // We recommend using the debug level for development
    });
//logger.add(winston.transports.Console, toYAML.config());
logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
    return logger;
}
const logger = createLogger();
const bot = new ViberBot(logger, {
    //authToken: process.env.TOKEN, // Learn how to get your access token at developers.viber.com
	authToken: process.env.TOKEN,
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});
// Multiple messages
function say(response, message) {
    response.send(new TextMessage(message));
}

//#################################################################### - search kved -  ############################################################
function search_benefic(obj1,response1){
/*
var MongoClient = require('mongodb').MongoClient;
var url1 = process.env.DB;
MongoClient.connect(url1, function(err, db) {
  if (err) throw err;
var dbo = db.db("work");
	var numbers = /[0-9]/;
var invletters = /^[a-zA-Z]+$/;
	var kved = obj1;
	var kved1  = kved.charAt(0).toUpperCase() + kved.slice(1);
	var kved2  = kved.toUpperCase();
	console.log('This is kved1 :' + kved1);
	console.log("this is kved " + kved);
	if (kved.indexOf(',')>-1 || kved.indexOf('$')>-1 || kved.indexOf('<')>-1 || kved.indexOf('?')>-1 || kved.indexOf('!')>-1 ) {
	bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + 'За запитом :' + ' ' + '_'+ '{'+ kved.toUpperCase() +'}'+ '_'+ ' '+ ' нічого не знайдено перевірте правильність написання'),new KeyboardMessage(keys)]);	
	}
	else {
	dbo.collection('owner').find({$or:[{"statementGroups.beneficialOwnershipStatements.interestedParty.name": new RegExp(kved2)},{"statementGroups.beneficialOwnershipStatements.entity.name": new RegExp(kved2)}]}).toArray()
	.then(data => { 
	var datas = '';
for (var i= 0; i< data.length; i++) {
	var obj = Object.values(data[i]);
		var datas = [
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.name
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.jurisdiction
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.foundingDate
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.addresses[0].address
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.type
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.name
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.placeOfResidence.country
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.addresses.address
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interests.details
		
		];
		
	}
	if (datas.length > 0) {
	bot.sendMessage(response1, [new TextMessage(
	'Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + 
	'\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        ' \n' + 
		'Імя ЮО Беніфіціара : ' +  datas[0] +   
		'Країна : ' +  datas[1] +  
		'дата заснування : ' + datas[2] +  
		//'адреса : ' + '*' + datas[3] + '*'+
		'Тип особи беніфіціарів : ' + datas[3] +    
		'Імя особи беніфіціарів  : '  + datas[4] + 
		//'Країна : ' + '*' + datas[6] + '*'+
		//'адреса : ' + '*' + datas[6] + '*'+
		//'деталі : ' + '*' + datas[7] + '*'+
		 '\n' + ' \n' + '\n' )])
	.then(()=>{
	keyboard.get_keyboard(response1);	
	})	
		
		
	}
	else {
		
		bot.sendMessage(response1,new TextMessage('Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + '*' + '\n' +  " Нажаль за Вашим запитом" + ' ' + '*' + kved2 + '*'+ " " +  "нічого не знайдено " + ' ' +  
        'Можливо Ви невірно ввели запит  ' ));
		keyboard.get_keyboard(response1);	
		}

	   })
	.catch(error => {
    console.log(error);
                 })
	          }
	      })*/
		  //mongo client connect
//############################################################## Search from EDR #######################################################
var string  = encodeURI(obj1);
axios({ method: 'get',

	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	//headers: {'Content-Type': 'application/x-www-form-urlencoded' },
      url: ('process.env.DB_PORT/benefic/'+ string ),
    })
.then(result => {
		var datas = result['data'];
		if (datas) {
		var ex = datas;
bot.sendMessage(response1, [new TextMessage(
	'Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + 
	'\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        ' \n' +  ex
		 )])
	.then(()=>{
	keyboard.get_keyboard(response1);	
	})		



}
else {
			var ex = datas;
bot.sendMessage(response1, [new TextMessage(
	'Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + 
	'\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        ' \n' +  " Нажаль за Вашим запитом" + ' ' + '*' + kved2 + '*'+ " " +  "нічого не знайдено " + ' ' )])
	.then(()=>{
	keyboard.get_keyboard(response1);	
	})

}


	}
		).catch((err)=>{if (err) { bot.sendMessage(response1, [new TextMessage(	'Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + '\n' +  "Сервіс тимчасово недоступний  " + ' ' )]).then(()=>{keyboard.get_keyboard(response1);}) }})
//############################################################## Search from EDR #######################################################  
		  
		  
		  
       }
function answear(response) {
 console.log('This is EX : ' + ex);
		//say(response,'Lets see what i can do else ;-)' + '' + ex);
}		
module.exports = {search_benefic:search_benefic};
