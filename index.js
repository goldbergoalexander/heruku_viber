
'use strict';
const keyboard = require('./routes/keyboards.js'),
edrModule = require('./routes/edrsearch.js'),
curensy_search = require('./routes/Curency_search.js'),
news_search = require('./routes/news_search.js'),
car_search = require('./routes/Car_search.js'),
weatherkeyboard = require('./weather.js'),
KeyboardGeneratorModule = require('./keyboard_generator.js'),
ViberBot = require('viber-bot').Bot,
BotEvents = require('viber-bot').Events,
TextMessage = require('viber-bot').Message.Text,
RichMediaMessage = require('viber-bot').Message.RichMedia,
ex = edrModule.search(),
ProgressBar = require('progressbar.js'),
winston = require('winston'),
toYAML = require('winston-console-formatter'),
ngrok = require('./get_public_url'),
KeyboardMessage = require('viber-bot').Message.Keyboard,
request = require('request'),
benefic = require('./routes/benefic_search.js'),
test_search = require('./routes/test_search.js'),
LocationMessage = require('viber-bot').Message.Location;

require('dotenv').config()



function createLogger() {
    const logger = winston.createLogger({
        level: "debug" // We recommend using the debug level for development
    });

//logger.add(winston.transports.Console, toYAML.config());
 //###
logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
    return logger;
}

function say(response, message) {
    response.send(new TextMessage(message));
}
//##################### fuction keyboard ######################
function main_keyboard(response){
	
	response.send(new KeyboardMessage(keys));
}
//##################### fuction keyboard ######################
module.exports = {main_keyboard:main_keyboard};

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






bot.onTextMessage(//,(message, response) => {
		var obj = message.text;
		var response1 = response;
		var textos = "hello";
		console.log('this is message text : ' + message.text);	
		var name = Object.values(response1.userProfile)[1];
		bot.sendMessage(response1.userProfile, new TextMessage('Привіт обери пункт який Вам необхідний '));
		//bot.sendMessage(response1.userProfile, new KeyboardMessage(keys,textos));
		keyboard.get_keyboard(response.userProfile);
			
	});
	
function hear(response, messages) {
    response.send(new TextMessage(messages));
}
//#####################################    Weather #####################################################
bot.onTextMessage(/weather/, (message, response) => {
	

	
	//############################################################################################################
	
		bot.sendMessage(response.userProfile, [new TextMessage("для отримання данних оберіть тип способу отримання погоднії умов з меню  \ud83d\udc47 ")/*, new KeyboardMessage(keys_edr)*/])
	.then(()=>{
		//console.log(`${message.latitude}, ${message.longitude}`);
		keyboard.get_keyboard_weather(response.userProfile);
		
		//keyboard.get_keyboard_weather(response.userProfile);
		//####################### take simple search ##############################
			say(response,'Для пошуку за один день по геолокацІї натисніть 1 день та підтвердіть надання геолокаційних данних .... \ud83d\udc47 ')
		//keyboard.get_keyboard_weather_oneday(response.userProfile);
			//bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
				bot.onTextMessage(/oneday/, (messages, response) => {
					//const messageson = new LocationMessage(latitude, longitude);
		       //const messagessso = new LocationMessage(messages.latitude, longitude);
			console.log(messages);
            var response1 = response.userProfile;
            //edrModule.search(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " /*+ lat + '  '+ lon + */+ " надійде якнайшвидше \ud83d\udd50  "));
				   })
		
	         /*
//############################ take search 2 parameters #############################################
         bot.onTextMessage(/two_parameters|2 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 2 параметрами наприклад : "Комунальне Київ" або "Фермерське Київська" .... \ud83d\udc47 ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_two(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})
		 
	//############################ take search 3 parameters #############################################
     bot.onTextMessage(/3_parameters|3 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : "81.10 Київська зареєстровано" або "Комунальне Київ зареєстровано" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_three(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})
		 //############################ take search kved ###########################################################
     bot.onTextMessage(/kved|кведи/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : Номер або назву кведу : "81.10", або "Діяльність посередників у торгівлі товарами широкого асортименту" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_kved(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})*/
			
		 //############################ switch to main menu  ###########################################################
bot.onTextMessage(/main_menu|Головне меню/, (message,response) => {
	       keyboard.get_keyboard(response.userProfile);
	
             })
          })
       
	//##############################################################################################################
	
	
	
	
	
	
})
//#######################################    TEST  ###################################################
bot.onTextMessage(/./, (message, response) => {
	 	say(response,'Для пошуку тестового введіть номур машини  .... \ud83d\udc47 ');
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            test_search.testsearch(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   })
				
	//bot.sendMessage(response.userProfile,[new TextMessage('Сервіс в розробці...')/*,new KeyboardMessage(keys)*/] );
	//keyboard.get_keyboard(response.userProfile);	
	
	
})
//#######################################    Benefic ###################################################
bot.onTextMessage(/benefic/, (message, response) => {
	 	say(response,'Для пошуку беніфіціарів введіть фамілію або назву компаніі латиницею  .... \ud83d\udc47 ');
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            benefic.search_benefic(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   })
				
	//bot.sendMessage(response.userProfile,[new TextMessage('Сервіс в розробці...')/*,new KeyboardMessage(keys)*/] );
	//keyboard.get_keyboard(response.userProfile);	
	
	
})
//#######################################    News   ####################################################
bot.onTextMessage(/news|новини/, (message,response) => {
	var response1 = response.userProfile;
	say(response, 'Привіт ви обрали новини : ');
	news_search.news(response1);
	})
//#######################################    Curency   ####################################################
bot.onTextMessage(/Валюта|Cash/, (message,response) => {
	var response1 = response.userProfile;
	say(response, 'Привіт ви обрали курс валют : ');
	curensy_search.curensy(response1);
	})
//#######################################    carsearch   ####################################################
bot.onTextMessage(/Transport|Транспорт/, (message,response) => {   //sdsd
	bot.sendMessage(response.userProfile, new TextMessage("для отримання данних введівть номер авто ВХХХХХВО  \ud83d\udc47 "))
	.then(()=>{
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text.toUpperCase();
            var response1 = response.userProfile;
            car_search.carsearch(obj,response1);
		bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим номером авто = > " + messages.text.toUpperCase() + " надійде якнайшвидше \ud83d\udd50  "));
				   })
			 })
		})
//#######################################   edr_search  ####################################################
bot.onTextMessage(/EDR|ЕДР/, (message,response) => {   //sdsd
		bot.sendMessage(response.userProfile, [new TextMessage("для отримання данних оберіть тип пошуку з меню  \ud83d\udc47 ")/*, new KeyboardMessage(keys_edr)*/])
	.then(()=>{
		keyboard.get_keyboard_edr(response.userProfile);
		//####################### take simple search ##############################
		bot.onTextMessage(/Simple|звичайний/, (message,response) => { 
		say(response,'Для простого пошкук введіть назву компанії, код едрпоу, фіо керівника .... \ud83d\udc47 ');
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   })
				})
	         
//############################ take search 2 parameters #############################################
         bot.onTextMessage(/two_parameters|2 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 2 параметрами наприклад : "Комунальне Київ" або "Фермерське Київська" .... \ud83d\udc47 ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_two(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})
		 
	//############################ take search 3 parameters #############################################
     bot.onTextMessage(/3_parameters|3 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : "81.10 Київська зареєстровано" або "Комунальне Київ зареєстровано" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_three(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})
		 //############################ take search kved ###########################################################
     bot.onTextMessage(/kved|кведи/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : Номер або назву кведу : "81.10", або "Діяльність посередників у торгівлі товарами широкого асортименту" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_kved(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
		       })
			})
		 //############################ switch to main menu  ###########################################################
bot.onTextMessage(/main_menu|Головне меню/, (message,response) => {
	       keyboard.get_keyboard(response.userProfile);
	
             })
          })
       })
//#######################################   edrsearch  ####################################################
	



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
	} //
	/*
	else if (messageActionBody === actionBodyweather.toUpperCase()) {
		// TODO: Handle no!
		const weatherModule1 = new weatherkeyboard();
		response.send(new TextMessage('укажи данные для поиска погоды',weatherModule1));
		/*
		function weather(response) {
    response.send(new TextMessage('укажите как выхотите узнать погоду '), weatherkeyboard);
}
		
		
	}
	*/
	
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
/*bot.onTextMessage(/./, (message, response) => {
	if (obj.indexOf('#')===1)
	 	say(response, 'Вы написали # ' + '' + obj );
	   
    
});
*/

bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)).then(()=>{
		
	keyboard.get_keyboard(response.userProfile);	
		
	})
	
	);

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

//module.exports={get_keyboard:get_keyboard};