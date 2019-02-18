'use strict';
const util = require('util'),
axios = require('axios'),
keyboard = require('./keyboards.js'),
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
    authToken: '486ba703aae7d158-a62a910dc54084e9-4bc7cfea4a8d72f5', // Learn how to get your access token at developers.viber.com
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});
// Multiple messages
function say(response, message) {
    response.send(new TextMessage(message));
}


function testsearch(obj,response1){ 
var MongoClient = require('mongodb').MongoClient;
var url1 = "mongodb://goldberg:tugdUqXR1885210623@104.248.71.0:27017/admin";

MongoClient.connect(url1,/*{ useNewUrlParser: true },*/ function(err, db) {

  if (err) throw err;
  var dbo = db.db("work");
	
	
	var text = obj;
	
	for(var i=0;i<=text.length;i++) {
	var resultstring = text.substring(0,i);
		}
	
	
	
		
	console.log(text.length);
	var text1  = resultstring.toUpperCase();
	
	console.log(text1);
	
	if (text.length === 8)
	{
		dbo.collection('mreotest111').find({"n_reg_new": text1}).toArray()
	.then(data => { 
	var datas = '';
for (var i= 0; i< data.length; i++) {
	var obj = Object.values(data[i]);
		var datas = [
		data[i].n_reg_new
		+'\n',
		data[i].brand
		+'\n',
		data[i].model
		+'\n',
		data[i].body
		+'\n',
		data[i].color
		+'\n',
		data[i].d_reg
		+'\n',
		data[i].make_year
		+'\n',
		data[i].oper_name
		+'\n',
		data[i].reg_addr_koatuu
		+'\n',
		data[i].dep
		
		
		];
		console.log(data[i].reg_addr_koatuu);
		console.log(data[i].oper_name);
		console.log(data[i].dep);
	}
	
	var textos  = "bla";
	console.log(datas);
console.log(datas);
console.log(datas.length);
if (datas.length > 0) {
	
		bot.sendMessage(response1,[new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' + '*' + '\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        'Реєстраційни номер : ' +  datas[0] + 
		'Марка : '  + datas[1] + 
		'Модель : ' + datas[2]  + 
		'Тип : ' + datas[3] + 
		'Колір : '  + datas[4] + 
		'Рік реєстрації : '  + datas[5] + 
		'Рік випуску : '  + datas[6] + 
		'Тип реєстрації : ' + datas[7] + 
		'Код Коатуу : '  + datas[8] + 
		'Де зареєстровано : '  + datas[9] + 
		'\n' + ' \n')/*,new KeyboardMessage(keys)*/]);
		keyboard.get_keyboard(response1);
		
	
	
		
	}
	else {
		bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' + '\n' +  " Нажаль за Вашим запитом" + ' ' + text1 + " " +  "нічого не знайдено " + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року  ' )/*,new KeyboardMessage(keys)*/]);
		keyboard.get_keyboard(response1);
		}
	})
.catch(error => {
    console.log(error);
  });
}
//############################# if user enter not 8 chars ##############################
else if (text.length > 8) { 
	
	bot.sendMessage(response1, [new TextMessage( 'Привіт' + ' ' + ' Ви обрали розділ авто :' + '\n' +  " ви не вказали невірну кількість знаків. У Вашому випадку :" + resultstring.length +   " Знаків. Повторіть спробу, або звернітся до розділу /help" + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року  ')/*, new KeyboardMessage(keys)*/]);
		keyboard.get_keyboard(response1);	

	}
	else { 
		bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' +  '\n' +  " ви не вказали невірну кількість знаків. У Вашому випадку :" + resultstring.length  +   " Знаків Повторіть спробу, або звернітся до розділу /help" + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року ')/*,new KeyboardMessage(keys)*/]);
		keyboard.get_keyboard(response1);	
		
	}
//############################# if user enter not 8 chars ##############################

})
}

module.exports = {testsearch:testsearch};