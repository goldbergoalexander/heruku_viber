'use strict';
const KeyboardGeneratorModule = require('./keyboard_generator.js');
const actionBodyweatherName = 'namecity';
const actionBodyweatherLocation = 'locationcity';
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
require('dotenv').config();

const winston = require('winston');
const toYAML = require('winston-console-formatter');
const ngrok = require('./get_public_url');
const KeyboardMessage = require('viber-bot').Message.Keyboard;

var request = require('request');
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
    authToken: process.env.TOKEN, // Learn how to get your access token at developers.viber.com
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});


function geolocationKeyboard() {
	let keyboardGenerator3 = new KeyboardGeneratorModule();
	keyboardGenerator3.addElement('Поиск по геолкации', actionBodygeolocation, '#57B8FF');
	return keyboardGenerator3.build();
}


function weatherkeyboard() {
	let keyboardGenerator2 = new KeyboardGeneratorModule();
	keyboardGenerator2.addElement('name', actionBodyweatherName, '#57B8FF');
	keyboardGenerator2.addElement('geolocation', actionBodyweatherLocation, '#DB3069');
	return keyboardGenerator2.build();
}

function answear(){

	response.send(new TextMessage('укажи данные для поиска погоды'));
	
	
	
}


/*
function weather(botResponse, weather) {
    //response.send(new TextMessage('укажите как выхотите узнать погоду '), weatherkeyboard);
	return say(botResponse,'hello world');
}

*/



module.exports = {
  keybord: weatherkeyboard ,
  say: answear
};
