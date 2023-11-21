'use strict';
const
TextMessage = require('viber-bot').Message.Text,
KeyboardMessage = require('viber-bot').Message.Keyboard,
winston = require('winston'),
toYAML = require('winston-console-formatter'),
ViberBot = require('viber-bot').Bot;
//############################################################# bot Connect #################################################
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
    //authToken: process.env.TOKEN, // Learn how to get your access token at developers.viber.com
	authToken: process.env.TOKEN,
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});
//############################################################# bot Connect #################################################
