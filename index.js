
'use strict';

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

function say(response, message) {
    response.send(new TextMessage(message));
}
//add keyboard 
var keyboard = 
{
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>ASIAN</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "ASIAN",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>FRENCH</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "French",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/ntpef5syd/french.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>MEXICAN</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Mexican",
		"BgColor": "#f6f7f9",
		"Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>ITALIAN</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Italian",
		"BgColor": "#dd8157",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>INDIE</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Indie",
		"BgColor": "#f6f7f9",
		"Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>MORE</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "More",
		"BgColor": "#a8aaba",
		"Image": "https://s18.postimg.org/ylmyu98et/more_Options.png"
	}]
}


// add keyboard 






function checkUrlAvailability(botResponse, urlToCheck) {
	
	    if (urlToCheck === '' ) {
        say(botResponse, 'Ок прверим Сайт на его доступность');
			return;
	}
    
    say(botResponse, 'Подождите ...дайте мне проверить!');
	
	
    var url = urlToCheck.replace(/^http:\/\//, '');
	
	    request('http://isup.me/' + url, function(error, requestResponse, body) {
        if (error || requestResponse.statusCode !== 200) {
            say(botResponse, 'Something is wrong with isup.me.');
            return;
        }

        if (!error && requestResponse.statusCode === 200) {
            if (body.search('is up') !== -1) {
                say(botResponse, 'ОК! ' + urlToCheck + '. Єтот сайт работает.');
            } else if (body.search('Мда') !== -1) {
                say(botResponse, 'Емм  ' + urlToCheck + '. Єто не похоже на адрес веб-сайта.? Пожалуйста придерживайтесь формата `test.com`');
            } else if (body.search('down from here') !== -1) {
                say(botResponse, 'Мда! ' + urlToCheck + '. Не рабочий.');
            } else {
                say(botResponse, 'Проблемка...Что-то не так с   isup.me.');
            }
        }
    })
	
}

const logger = createLogger();
//const HEROKU_URL = 'https://hidden-harbor-18514.herokuapp.com';
//const NOW_URL = 
//const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY = '4870a95da0e7d652-3fd1d514a93e52c2-18a38455c3f26ee6';
/*
if (!process.env.VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY) {
    logger.debug('Could not find the Viber account access token key in your environment variable. Please make sure you followed readme guide.');
    return;
}
*/

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: '486ba703aae7d158-a62a910dc54084e9-4bc7cfea4a8d72f5', // Learn how to get your access token at developers.viber.com
    name: "alldata",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});

// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, `Sorry. I can only understand text messages.`);
    }
});


var HEROKU_URL = "https://hidden-harbor-18514.herokuapp.com/";

bot.onTextMessage(/./, (message, response) => {
	
	 checkUrlAvailability(keyboard,response, message.text);
           
       
	
	
    
});

//if (process.env.NOW_URL || process.env.HEROKU_URL) {
	if (process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 8090;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.HEROKU_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Trying to use the local ngrok server.');
    return ngrok.getPublicUrl().then(publicUrl => {
        const http = require('http');
        const port = process.env.PORT || 8090;

        http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

    }).catch(error => {
        console.log('Can not connect to ngrok server. Is it running?');
        console.error(error);
        process.exit(1);
    });
}
