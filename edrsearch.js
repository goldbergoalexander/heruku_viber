'use strict';
var util = require('util');
const axios = require('axios');
//const iconv = require('iconv');
//const utf8 = require('utf8');	
const 
response1 = require('./index.js'),
obj = require('./index.js');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const winston = require('winston');
const toYAML = require('winston-console-formatter');


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


function search(obj,response1){
	
//var mes =kved.toUpperCase(); 	
var string  = encodeURI(obj);		
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
const keys  = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 3,
		"Rows": 2,
		"Text": "<font color=\"#494E67\">Smoking</font><br><br>",
		"TextSize": "medium",
		"TextHAlign": "center",
		"TextVAlign": "bottom",
		"ActionType": "reply",
		"ActionBody": "Smoking",
		"BgColor": "#f7bb3f",
		"Image": "https: //s12.postimg.org/ti4alty19/smoke.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<font color=\"#494E67\">Non Smoking</font><br><br>",
		"TextSize": "medium",
		"TextHAlign": "center",
		"TextVAlign": "bottom",
		"ActionType": "reply",
		"ActionBody": "Non smoking",
		"BgColor": "# f6f7f9",
		"Image": "https: //s14.postimg.org/us7t38az5/Nonsmoke.png"
	}]
};
var textos = "hello";
const messageso = new KeyboardMessage(key, textos);
//keyboard 	


		var datas = result['data'];
		
		var ex = datas;
		//var name = Object.values(response1.userProfile)[1];
		
		console.log(datas);
		
			bot.sendMessage(response1.userProfile, 
		new TextMessage('Привіт ' 
		//+ '\n' + 'за запитом ' + obj 
        //+ '\n' + 'Ваші дані :'   
		//+ '\n' + ex 
        ),
		KeyboardMessage(keys,textos)
		
		)
				
		})
.catch(error => {
    console.log(error);
  });
			
	//}
}
function answear(response) {
 console.log('This is EX : ' + ex);
		//say(response,'Lets see what i can do else ;-)' + '' + ex);
}		
module.exports = {search:search,answear:answear,};