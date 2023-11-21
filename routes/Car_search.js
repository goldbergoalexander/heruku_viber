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
    //authToken: '486ba703aae7d158-a62a910dc54084e9-4bc7cfea4a8d72f5', // Learn how to get your access token at developers.viber.com
	authToken: process.env.TOKEN,
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});
// Multiple messages
function say(response, message) {
    response.send(new TextMessage(message));
}


function carsearch(obj,response1){ 
var MongoClient = require('mongodb').MongoClient;
var url1 = process.env.MONGO;

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
		dbo.collection('mreo').find({$or:[{"n_reg_new": text1},{"N_REG":text1}]}).toArray()
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
		var datas1 = [
		data[i].N_REG
		+'\n',
		data[i].BRAND
		+'\n',
		data[i].MODEL
		+'\n',
		data[i].BODY
		+'\n',
		data[i].COLOR
		+'\n',
		data[i].D_REG
		+'\n',
		data[i].MAKE_YEAR
		+'\n',
		data[i].OPER_NAME
		+'\n',
		data[i].REG_ADDR_KOATUU
		+'\n',
		data[i].DEP
		
		
		];
		console.log(data[i].reg_addr_koatuu);
		console.log(data[i].oper_name);
		console.log(data[i].dep);
	}
	
	var textos  = "bla";
	console.log(datas);
console.log(datas);
console.log(datas.length);
if (datas.length > 0 || datas1.length>0)  {
	
	if (datas[1]!='undefined\n'){
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
		'\n' + ' \n')/*,new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
		
	}
	else{
	bot.sendMessage(response1,[new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' + '*' + '\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        'Реєстраційни номер : ' +  datas1[0] + 
		'Марка : '  + datas1[1] + 
		'Модель : ' + datas1[2]  + 
		'Тип : ' + datas1[3] + 
		'Колір : '  + datas1[4] + 
		'Рік реєстрації : '  + datas1[5] + 
		'Рік випуску : '  + datas1[6] + 
		'Тип реєстрації : ' + datas1[7] + 
		'Код Коатуу : '  + datas1[8] + 
		'Де зареєстровано : '  + datas1[9] + 
		'\n' + ' \n')/*,new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
				
	}
	
	
		
	}
	else {
		bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' + '\n' +  " Нажаль за Вашим запитом" + ' ' + text1 + " " +  "нічого не знайдено " + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року  ' )/*,new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
		
		}
	}).catch(err=>{throw err})

}
//############################# if user enter not 8 chars ##############################
else if (text.length > 8) { 
	
	bot.sendMessage(response1, [new TextMessage( 'Привіт' + ' ' + ' Ви обрали розділ авто :' + '\n' +  " ви не вказали невірну кількість знаків. У Вашому випадку :" + resultstring.length +   " Знаків. Повторіть спробу, або звернітся до розділу /help" + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року  ')/*, new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
			

	}
	else { 
		bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' +  '\n' +  " ви не вказали невірну кількість знаків. У Вашому випадку :" + resultstring.length  +   " Знаків Повторіть спробу, або звернітся до розділу /help" + ' ' +  
        'Можливо Номер введеного Вами авто зареєсрований не в Україні або до 2013 року ')/*,new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
		
		
	}
//############################# if user enter not 8 chars ##############################

})
}
function carsearch_texpassport(obj,response1){
	
	                    var fullnumber = obj.toUpperCase(),
						seria = fullnumber.substr(0,3),
						number =  fullnumber.substr(3,9);
						console.log('http://api.hsc.gov.ua/gateway-edrmvs/api/verification/spr/'+seria+'/'+ number);
	
	//if mess.length less  then 9
if (obj.length<9) {bot.sendMessage(response1,[new TextMessage("Ви ввели невірну кількість знаків меньше необхідної кількості (3 серія та 6 номер свідоцтва) повторіть спробу \u2753 " )])}
//if mess.length biggest then 9
else if (obj.length>9) {bot.sendMessage(response1,[new TextMessage("Ви ввели невірну кількість знаків - більше необхідної кількості (3 серія та 6 номер свідоцтва) повторіть спробу \u2753 ")]) }
	
	axios({ method: 'get',

	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	//headers: {'Content-Type': 'application/x-www-form-urlencoded' },

      url: ('http://api.hsc.gov.ua/gateway-edrmvs/api/verification/spr/'+seria+'/'+ number),
    }).then(result=>{
		//if result is empty
	console.log(result.data[0])
	bot.sendMessage(response1,[new TextMessage('Привіт' + ' ' + ' Ви обрали розділ авто :' + '\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
	'*' + "###### - Свідоцтво дійсне - #####"  + '\n'+
	'Марка : ' + result.data[0].brand + '\n' +
	'Вага : ' + result.data[0].capacity + '\n' +
	'Колір : ' + result.data[0].color + '\n' +
	'Дата першої реєстрації : ' + result.data[0].dFirstReg + '\n' +
	'Дата реєстрації : ' + result.data[0].dReg + '\n' +
	'Тип палива : ' + result.data[0].fuel + '\n' +
	'Тип : ' + result.data[0].kind + '\n' +
	'Рік виготовлення : ' + result.data[0].makeYear + '\n' +
	'Модель : ' + result.data[0].model + '\n' +
	'номер свідоцтва : ' + result.data[0].nDoc + '\n' +
	'Реєстраційний номер : ' + result.data[0].nRegNew + '\n' +
	'кількість сидінь : ' + result.data[0].nSeating + '\n' +
	'кількість місць : ' + result.data[0].nStanding + '\n' +
	'Власна вага : ' + result.data[0].ownWeight + '\n' +
	'категорія : ' + result.data[0].rankCategory + '\n' +
	'серія свідоцтва : ' + result.data[0].sDoc + '\n' +
	'Повна вага : ' + result.data[0].totalWeight + '\n' +
	'Він код : ' + result.data[0].vin + '\n'
	)]).then(()=>{keyboard.get_keyboard_avto(response1);}).catch(err=>{throw err})
				//if result is empty
		//#####################################################   if result is not empty ##################################

		//#####################################################   if result is not empty ##################################
	}).catch(()=>{bot.sendMessage(response1,[new TextMessage( "введене Вами свідоцтво недійсне або відсутнє :-( ")]).then(()=>{keyboard.get_keyboard_avto(response1);}).catch(err=>{throw err}) })
	
	
	
	
	
}

module.exports = {
	carsearch:carsearch,
    carsearch_texpassport:carsearch_texpassport};
