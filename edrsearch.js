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
const KeyboardMessage = require('viber-bot').Message.Keyboard;
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
		
		console.log("this i user profile : " + response1.userProfile);
		
			bot.sendMessage(response1.userProfile,
        new KeyboardMessage(keys,textos),
		new TextMessage('Привіт ' 
		+ '\n' + 'за запитом ' + obj1 
        + '\n' + 'Ваші дані :'   
		+ '\n' + ex 
        ))
				
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