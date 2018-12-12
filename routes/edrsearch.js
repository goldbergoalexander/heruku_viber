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
		"ActionBody": "Wheather",
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
		"ActionBody": "Benific",
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
		"Text": "<br><font color=\"#494E67\"><b>МЕНЮ</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "mainmenu",
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


function search(obj1,response1){
	
//var mes =kved.toUpperCase(); 	
var string  = encodeURI(obj1);
	
//console.log('This is response : ' + obj);	
//console.log('This is mes : ' + mes);
//console.log('This is string : ' + string);
//if (obj.indexOf('20.40') === 1 ) {

	axios({ method: 'get',

	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	
      url: ('http://93.188.161.182:10010/telegramkved/'+ string ),
    })


.then(result => {

//keyboard 

var textos = "hello";
//var messageso = new KeyboardMessage(keys, textos);
//var messageso = new KeyboardMessage(keys,textos);
//keyboard 	


		var datas = result['data'];
		
		var ex = datas;
		//var name = Object.values(response1.userProfile)[1];
		
		bot.sendMessage(response1,[new TextMessage('Привіт ' 
		+ '\n' + 'за запитом ' + obj1 
        + '\n' + 'Ваші дані :'   
		+ '\n' + ex 
        ),new KeyboardMessage(keys_edr)])
				
		})
.catch(error => {
    console.log(error);
  });
			
	//}
}
//######################################### search two ###############################################
function search_two(obj1,response1){
var string  = encodeURI(obj1);
	
	axios({ method: 'get',

	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	
      url: ('http://93.188.161.182:10010/telegramkved/two/'+ string ),
    })
.then(result => {

var textos = "hello";
//var messageso = new KeyboardMessage(keys, textos);
//var messageso = new KeyboardMessage(keys,textos);
//keyboard 	


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
//######################################### search two ###############################################





function answear(response) {
 console.log('This is EX : ' + ex);
		//say(response,'Lets see what i can do else ;-)' + '' + ex);
}		
module.exports = {search:search,search_two:search_two};