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
LocationMessage = require('viber-bot').Message.Location;
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


function wheather (response1){
	bot.sendMessage(response1,[new TextMessage('Привіт' + ' ' + ' Оберіть за якими параметрами Ви хочете отримати погодні умови ?')/*,new KeyboardMessage(keys)*/]).then(()=>{keyboard.get_keyboard_weather(response1);}).catch(err=>{throw err})
	bot.onTextMessage(/За один день|oneday/, (message,response) => {
	bot.sendLocationMessage(response1,[new LocationMessage(latitude, longitude)/*,new KeyboardMessage(keys)*/]).then(()=>{bot.sendMessage(response1,[new TextMessage('Привіт отже твоя локація' + response1.latitude + ' ' + response1.longitude  }).catch(err=>{throw err})

	}
	}


module.exports  = {wheather:wheather}