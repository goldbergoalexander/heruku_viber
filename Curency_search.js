'use strict';
var util = require('util');
const axios = require('axios');
//const iconv = require('iconv');
//const utf8 = require('utf8');	
const response1 = require('./index.js');
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


function curensy(response1){ 
//hello
	
//var mes =kved.toUpperCase(); 	
var string  = encodeURI(obj1);
	
var date = new Date(),
  n = date.getMonth()+1,
  n1 = date.getDate(),
  n2 = date.getFullYear(),
  newday = n1+'.'+n+'.'+n2;
  console.log(newday);

						
						
						
						
						
						
	axios({ method: 'get',
	
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	//headers: {'Content-Type': 'application/x-www-form-urlencoded' },
	
		
      url: ('https://api.privatbank.ua/p24api/exchange_rates?json&date='+newday ),
    })
	
.then(result => {

var datas = result;
		var datas1 = [];
		for (var a = 17;a<=22; a++) {
		console.log(datas.data.exchangeRate[a]);
		
		}
		
		
		var curen = [];
		
		console.log(datas.data.exchangeRate.length);
		
		
		
		for (var i = 14; i<=25; i++){
			
			
			if (!datas.data.exchangeRate[i].saleRate) {
				
				var curency  = '\n' + datas.data.exchangeRate[i].baseCurrency + ' -> ' +  datas.data.exchangeRate[i].currency + ' ' + "купівля : " + datas.data.exchangeRate[i].purchaseRateNB + ' ' + ' продаж : ' + datas.data.exchangeRate[i].saleRateNB ;
				curen.push(curency);
			} 
			else{
		var curency  = '\n' + datas.data.exchangeRate[i].baseCurrency + ' -> ' +  datas.data.exchangeRate[i].currency + ' ' + "купівля : " + datas.data.exchangeRate[i].purchaseRateNB + ' ' + ' продаж : ' + datas.data.exchangeRate[i].saleRate ;		
		
curen.push(curency);		
			}
		
		
		
		
		
		}
			

		var ex = curen;



		
			bot.sendMessage(response1.userProfile, 
		new TextMessage('Привіт ' 
		+ '\n' + 'актуальний курс Валют :'   
		+ '\n' + ex 
        ))
				
		})
.catch(error => {
    console.log(error);
  });
			
	//}
}

module.exports = {curensy:curensy,};