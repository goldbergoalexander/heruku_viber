
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

function checkUrlAvailability(botResponse, urlToCheck) {
	
	    if (urlToCheck === '' ) {
        say(botResponse, 'Ок прверим Сайт на его доступность');
			return;
	}
    
    say(botResponse, 'Подождите ...дайте мне проверить!');
	
	//serch weather 
	
	
	axios({ method: 'get',
	
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	//headers: {'Content-Type': 'application/x-www-form-urlencoded' },
	
	//api.openweathermap.org/data/2.5/forecast?lat=35&lon=139
	//url: ('http://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude),
	
      //url: ('http://api.openweathermap.org/data/2.5/weather?q='+city2+','+country+'&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua'),
	  url : ('http://api.openweathermap.org/data/2.5/weather?q='+ urlToCheck + '&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua'),
	     })
	.then(result => { 
		var datas = result['data'];
		//console.log(stringZ);
	//console.log(messageZ);
		//console.log(datas);
		//var datan = Object.values(datas);
		var data1 = datas.datas;
		var ex = datas;
		var ex1 = datas[Object.values(datas)[0]]; 
		var ex11 = Object.values(datas)[0]; 
		var realdata1 = Object.values(ex11);
		var realdata2 = [];
		var realdata3 = [];
		var realdata4 = [];
		
		//var myObj = JSON.parse(this.datas);
        
		
	for(i=0;i<datas.length;i++) {
		
		var coord = Object.values(datas);
		var coord1 = coord[i];
		
		realdata2.push(coord1);
		
	}
		//var datas1 = JSON.stringify(datas);
		var datas1 = [];
		// variables of weather
		var coord1 = Object.values(datas.coord)[1];   //latitude
		var coord2 = Object.values(datas.coord)[0];   //longitude
		var main11 = Object.values(datas.main)[0];
		var main1 = parseInt(main11);
		var main0 = main1 - 273.15; //celciy
		var main2 = parseInt(main0);
		var weather1  = Object.values(datas.weather)[0]; 
		var weather2  = Object.values(weather1)[2];
		var wind1  = Object.values(datas.wind)[0];
		var icon = Object.values(weather1)[3]; 
				axios({ method: 'get',
		    headers: {'Content-type': 'image/png; charset=utf8'
  },
			url : ('http://openweathermap.org/img/w/'+icon+'.png'), 
		})
  .then(response => {
	  //var img1 = response.data;
	  
	  var icon1 = 'http://openweathermap.org/img/w/'+icon+'.png';
	  var img = response.data.explanation;
	  var img2 = response.data.url;
	  var img1 = response.data;
	  //console.log(option.location.longitude);
	  //console.log(option.location.latitude);
	  //console.log(option.location);
	  
    console.log(response.data.url);
    console.log(response.data.explanation);
	    console.log(icon1);
 
		
		
		// use axios to get image ##################
		
		//var totalise  = bot.send_photo(message.chat.id, photo=totalicon);
		//icons 
		
		
		//var weather2  = weather1.main;
		
		
		//variables of weather 
		
		console.log(datas);
		//console.log(weather2);
		console.log(datas.main.temp);
		console.log(icon);
		console.log(city2);
		//console.log(country);
		//console.log(img2);
		var imagez = bot.sendPhoto(message.chat.id, icon1);      
		//console.log(datas.weather[0].description);
		//console.log("This is datasss" + ' ' + datasss);
		//console.log("This is result2" + ' ' +  realdata2);
		
			
	say(botResponse, 'Ваша погода : ' 
	    + '\n' + 'коротко'
		+ '\n'
		+ ' координати міста: ' + ' ' + ' дов.'+ coord1 + ' ' + ' шир.' + coord2
		+ '\n'
		+ ' Погодні умови: ' + ' ' + weather2 
		+ '\n'
		+ ' Температура: ' + ' ' + main1 + '.kel' + ' ' + main2 + '.cel'
		+ '\n'
		+ ' Швидкість вітру: ' + ' ' + wind1 + '.m/с' 
		+ '\n'+ '*'

		 })
  .catch(error => {
    console.log(error);
  });

	}	
		)
	
		)

	
	
	
	//serch weather
	
	
	
	
	
/*
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
	*/	
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
    checkUrlAvailability(response, message.text);
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
