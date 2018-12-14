'use strict';
var util = require('util');
const axios = require('axios');
//const iconv = require('iconv');
//const utf8 = require('utf8');	
const 
response1 = require('../index.js'),
obj = require('../index.js');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const winston = require('winston');
const toYAML = require('winston-console-formatter');
//############### keyboard ######################
var keys  = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>ПОГОДА</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "weather",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Транспорт</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Transport",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/ntpef5syd/french.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Валюта</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Cash",
		"BgColor": "#f6f7f9",
		"Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>БЕНІФІЦІАРИ</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "benefic",
		"BgColor": "#dd8157",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>ЄДР</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "EDR",
		"BgColor": "#f6f7f9",
		"Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Новини</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "news",
		"BgColor": "#a8aaba",
		"Image": "https://s18.postimg.org/ylmyu98et/more_Options.png"
	}]
};		
//###############################################keyboard for EDR ####################################################
var keys_edr  = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Звичайний</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Simple",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>2 параметри</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "two_parameters",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/ntpef5syd/french.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>3 параметри</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "3_parameters",
		"BgColor": "#f6f7f9",
		"Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>кведи</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "kved",
		"BgColor": "#dd8157",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}, {
		"Columns": 6,
		"Rows":2,
		"Text": "<br><font color=\"#494E67\"><b>Головне меню</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "main_menu",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
	} ]
};	

//###############################################keyboard for EDR ####################################################

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

//#################################################################### - search simple -  ############################################################
function search(obj1,response1){
var string  = encodeURI(obj1);
axios({ method: 'get',
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
      url: ('http://93.188.161.182:10010/telegramkved/'+ string ),
    })
.then(result => {
var textos = "hello";
var datas = result['data'];
var ex = datas;
		bot.sendMessage(response1,[new TextMessage('Привіт ' 
		+ '\n' + 'за запитом ' + obj1 
        + '\n' + 'Ваші дані :'   
		+ '\n' + ex 
        ),new KeyboardMessage(keys_edr)])
				
		})
.catch(error => {
    console.log(error);
  });
}
//#################################################################### - search two parameters -  ############################################################
function search_two(obj1,response1){
var string  = encodeURI(obj1);
	axios({ method: 'get',
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
      url: ('http://93.188.161.182:10010/telegramkved/two/'+ string ),
    })
.then(result => {
var textos = "hello";
var datas = result['data'];
var ex = datas;
		bot.sendMessage(response1,[new TextMessage('Привіт ' 
		+ '\n' + 'за запитом ' + obj1 
        + '\n' + 'Ваші дані :'   
		+ '\n' + ex 
        ),new KeyboardMessage(keys_edr)])
		})
.catch(error => {
    console.log(error);
  });
}
//#################################################################### - search three parameters -  ############################################################
function search_three(obj1,response1){
var string  = encodeURI(obj1);
	axios({ method: 'get',
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
      url: ('http://93.188.161.182:10010/telegramkved/more/'+ string ),
    })
.then(result => {
var textos = "hello";
var datas = result['data'];
var ex = datas;
bot.sendMessage(response1,[new TextMessage('Привіт ' 
		+ '\n' + 'за запитом ' + obj1 
        + '\n' + 'Ваші дані :'   
		+ '\n' + ex 
        ),new KeyboardMessage(keys_edr)])
		})
.catch(error => {
    console.log(error);
  });
}
//#################################################################### - search kved -  ############################################################
function search_kved(obj1,response1){
var MongoClient = require('mongodb').MongoClient;
var url1 = "mongodb://use_teleg:BqgS9DJJ8B7rYSyBVZ@93.188.161.182:18063/test";
MongoClient.connect(url1,/*{ useNewUrlParser: true },*/ function(err, db) {
  if (err) throw err;
var dbo = db.db("test");
	var numbers = /[0-9]/;
var invletters = /^[a-zA-Z]+$/;
	var kved = obj1;
	var kved1  = kved.charAt(0).toUpperCase() + kved.slice(1);
	console.log('This is kved1 :' + kved1);
	console.log("this is kved " + kved);
	if (kved.indexOf(',')>-1 || kved.indexOf('$')>-1 || kved.indexOf('<')>-1 || kved.indexOf('?')>-1 || kved.indexOf('!')>-1 ) {
	bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + 'За запитом :' + ' ' + '_'+ '{'+ kved.toUpperCase() +'}'+ '_'+ ' '+ ' нічого не знайдено перевірте правильність написання'),new KeyboardMessage(keys)]);	
	}
	else {
	dbo.collection('edruobase').find({"KVED":new RegExp(kved)}).limit(1).toArray()
	.then(result => { 
	console.log('This is res0 ' + result[0].KVED);
	var datas1 = result[0].KVED;
	var ex = datas1;
	bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + 'За запитом :' + ' ' + '_'+ '{'+ kved.toUpperCase() +'}'+ '_'+ ' '+ '\n'+ ex ),new KeyboardMessage(keys)]);
	   })
	.catch(error => {
    console.log(error);
                 })
	          }
	      })
       }
//#################################################################### - search kved -  ############################################################




function answear(response) {
 console.log('This is EX : ' + ex);
		//say(response,'Lets see what i can do else ;-)' + '' + ex);
}		
module.exports = {
	search:search,
    search_two:search_two,
	search_three:search_three,
	search_kved:search_kved,
				  };