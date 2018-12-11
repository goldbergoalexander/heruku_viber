
'use strict';
const edrModule = require('./edrsearch.js');
const curensy_search = require('./Curency_search.js');
const weatherkeyboard = require('./weather.js');
const KeyboardGeneratorModule = require('./keyboard_generator.js');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const ex = edrModule.search();
//const BotEvents = require('viber-bot').Events;
var ProgressBar = require('progressbar.js');


//const ex = require('./edrsearch.js');
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
const actionBodyYes = 'Yes';
const actionBodyNo = 'No';
const actionBodyweather = 'weather';
const actionBodybot = 'bot';
const actionBodyNumber = 'Number';
const actionBodybase = '';
const actionBodyweatherName = weatherkeyboard.actionBodyweatherName;
const actionBodyweatherLocation =weatherkeyboard.actionBodyweatherLocation;




function redeemCanDoKeyboard() {
	let keyboardGenerator1 = new KeyboardGeneratorModule();
	keyboardGenerator1.addElement('Узнать погоду', actionBodyweather, '#57B8FF');
	keyboardGenerator1.addElement('Построить бот', actionBodybot, '#DB3069');
	keyboardGenerator1.addElement('поиск', actionBodybase, '#57B8FF');
	keyboardGenerator1.addElement('узнать номер', actionBodyNumber, '#DB3069');
	return keyboardGenerator1.build();
}



function redeemYesOrNoKeyboard() {
	let keyboardGenerator = new KeyboardGeneratorModule();
	keyboardGenerator.addElement('Yes I would', actionBodyYes, '#57B8FF');
	keyboardGenerator.addElement('Not now', actionBodyNo, '#DB3069');
	return keyboardGenerator.build();
}



// add keyboard 
/*
function sendQuestion(response) {
	 response.send(new TextMessage('что вы хотите делать ?',
		redeemYesOrNoKeyboard()));
		
}
*/
function sendQuestion1(response) {
	 response.send(new TextMessage('Привет Выберите действие ниже',
		redeemCanDoKeyboard()));
		
}

//saerch in base 

function search(response) {
	response.send(new TextMessage('начнем поиск',
		redeemCanDoKeyboard()));
	console.log('this is search : ' + Object.keys(Object.values(response)[1]) + ' ' );
	/*
	    if (search === '' ) {
        say(botResponse, 'Ок прверим Сайт на его доступность');
			return;
	}
	*/
}



//saerch in base 









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
				say(botResponse,'Проблемка...Что-то не так с   isup.me.' );
				
			
			
			
			
			
			
			
			
				
				console.log(botResponse.userProfile.name);
				
								
				
				/*
				var options = {
           method: 'POST',
           url: 'https://chatapi.viber.com/pa/send_message',
           body: {
               // some required body properties here
			   
               text: 'Welcome to SUSI.AI!, ' + '' + '.',
               // code for showing the get started button here.
        }
           //json: true
       };
 */
        
	   
				
				
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







var HEROKU_URL = "https://hidden-harbor-18514.herokuapp.com/";

function whatyousay(botResponse, urlToCheck) {
	
	    if (urlToCheck === '' ) {
        say(botResponse, 'Вы написали ? ' + '' + urlToCheck );
			return;
	}
}	






bot.onTextMessage(/hey/, (message, response) => {
	//bot.on(BotEvents.MESSAGE_RECEIVED,(message, response) => {
	
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
//############### keyboard ######################
	 	
		//whatyousay(response);   
		//redeemYesOrNoKeyboard(response);
		//var actionBodybase = response;
		var obj = message.text;
		var response1 = response;
		var textos = "hello";
		console.log('this is message text : ' + message.text);	
		//console.log('this is response : ' + response);	
		var name = Object.values(response1.userProfile)[1];
		//bot.sendMessage(response1.userProfile, new KeyboardMessage(keys));
		bot.sendMessage(response1.userProfile, new TextMessage('Привіт обери пункт який Вам необхідний '));
		bot.sendMessage(response1.userProfile, new KeyboardMessage(keys,textos));
		
		
	
	/*
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, `Извените. ямогу понимать только текстовые сообщения.`);
    }
	let messageActionBody = message.text.toUpperCase();

	if (messageActionBody === 'ПОГОДА') {
		// TODO: Handle yes!
		response.send(new TextMessage('Ok. lets start to build. How name will be :?'));
		redeemYesOrNoKeyboard(response);
	} 
	
	*/
	
	
	

/*
if (obj==="ПОГОДА") {
	say(response, 'Привіт ' + ' ' +  name + ' ' + ' Для пошуку погоди Вамнеобхідно обрати опцію.....-) ' );			
}
if (obj==="Transport") {
	say(response, 'Привіт ' + ' ' +  name + ' ' + ' Для пошуку По АВТО Вам необхідно ввести наступну інфо.....-) ' );			
}
if (ActionBody==="EDR") {
		say(response, 'Привіт ' + ' ' +  name + ' ' + ' оберіть тип пошуку '  );
		bot.on('text', (message,response) => {
	   		var obj1 = message.text;
		var response1 = response;
		
		say(response, 'Привіт ' + ' ' +  name + ' ' + ' Ваш запит обробляється.....-) ' );		
		say(response, 
		+ '\n' + ' Що може бот  @alldata ' + ' ' 
		+ '\n' + '1. Звичайний запит в ЄДР по Юридичній особі:'  
	    + '\n' + '- по Назві, ЄДРПОУ, Кведу, Адресі :' + '\n' 
		);	
        edrModule.search(obj1,response1);
		})
}
	*/	
		
		
		
		
		
		
	});

bot.onTextMessage(/ПОГОДА|Wheather/, (message, response) => {
	
	say(response, 'hey you call weather?');
})
//#######################################    Curency   ####################################################
bot.onTextMessage(/Валюта|Cash/, (message,response) => {
	var response1 = response;
	say(response, 'Привіт ви обрали курс валют : ');
	curensy_search.curensy(response1);
	})
//#######################################    carsearch   ####################################################
bot.onTextMessage(/Transport|Транспорт/, (message,response) => {
	var response1 = response;
		//
	say(response, "для отримання данних введівть номер авто ВХХХХХВО  \ud83d\udc47 ").then(() => {
				
				 bot.onTextMessage(/ВХ/,(message,response)=>{
					 //console.log("this is mess.text " + " " + mess.text + ' '  +  mess.text.length);
					 
                    say(response, " інформація за Вашим номером авто = > " + mess.text.toUpperCase() + " надійде якнайшвидше \ud83d\udd50  ");
				 
				     })
				 })
				 			 
	//
	//curensy_search.curensy(response1);
	})
	//#######################################    Curency   ####################################################
	



bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	
	
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, `Извените. ямогу понимать только текстовые сообщения.`);
    }
	let messageActionBody = message.text.toUpperCase();

	if (messageActionBody === actionBodyYes.toUpperCase()) {
		// TODO: Handle yes!
		response.send(new TextMessage('Ok. lets start to build. How name will be :?'));
		redeemYesOrNoKeyboard(response);
	} else if (messageActionBody === actionBodyNo.toUpperCase()) {
		// TODO: Handle no!
		response.send(new TextMessage('Lets see what i can do else ;-)'));
	} 
	else if (messageActionBody === actionBodyweather.toUpperCase()) {
		// TODO: Handle no!
		const weatherModule1 = new weatherkeyboard();
		response.send(new TextMessage('укажи данные для поиска погоды',weatherModule1));
		/*
		function weather(response) {
    response.send(new TextMessage('укажите как выхотите узнать погоду '), weatherkeyboard);
}
		*/
		
	}
	
	else if (messageActionBody === actionBodybase.toUpperCase()) {
		
		var obj = message.text;
		var response1 = response;
		console.log('this is message text : ' + message.text);	
		console.log('this is response : ' + response);	
		say(response, 'Ваш запит обробляється....');
		
		edrModule.search(obj,response1);
		
		
	}
	else if (messageActionBody === actionBodyNumber.toUpperCase()) {
		// TODO: Handle no!
   	say(response, 'введите в поиск номер после #' );
	   
    
		
		
    


		
		
		
		//response.send(new TextMessage('укажи данные для поиска номера '));
	}	
	
	else if (messageActionBody === actionBodyweatherName) {
		// TODO: Handle no!
		response.send(new TextMessage('укажи имя города гапример Kyiv'));
	}	
	else if (messageActionBody === actionBodyweatherLocation) {
		// TODO: Handle no!
		response.send(new TextMessage('Нажмите на кнопку поиск по геолокации',geolocationKeyboard));
	}
	
	/*
	else {
		sendQuestion1(response);
	}
	*/
	
	
});
bot.onTextMessage(/./, (message, response) => {
	if (obj.indexOf('#')===1)
	 	say(response, 'Вы написали # ' + '' + obj );
	   
    
});

bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)));

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



