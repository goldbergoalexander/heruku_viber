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
LocationMessage = require('viber-bot').Message.Location,
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


function wheather (obj1,response1){
	var query1 = obj1;
	axios({ method: 'get',
	
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	
	  url : ('http://api.openweathermap.org/data/2.5/weather?q='+ query1 + '&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua&units=metric'),
	     })
	
	console.log('http://api.openweathermap.org/data/2.5/weather?q='+ query1 + '&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua&units=metric');
		
		
		
		
		}


module.exports  = {wheather:wheather}


/*

*/

//bot.sendMessage(response1,[new LocationMessage(latitude, longitude, [keyboard.get_keyboard_weather(response1)])])