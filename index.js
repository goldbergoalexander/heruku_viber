'use strict';
const 
keyboard = require('./routes/keyboards.js'),
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
benefic = require('./routes/benefic_search.js'),
wheather = require('./routes/wheather.js'),
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

const logger = createLogger();
// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    //authToken: '486ba703aae7d158-a62a910dc54084e9-4bc7cfea4a8d72f5', // Learn how to get your access token at developers.viber.com
	authToken: '4966dd3eb727d23a-2ca02550dcb5fdd8-ed95a9ede4160c32', // Learn how to get your access token at developers.viber.com
	//sdsdsds
    name: "ALLDATA",
    //avatar: "http://api.adorable.io/avatar/200/isitup" // Just a placeholder avatar to display the user
	avatar: "https://raw.githubusercontent.com/goldbergoalexander/heruku_viber/master/alldata_avatar.jpg"
});

// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});

var HEROKU_URL = "https://hidden-harbor-18514.herokuapp.com/";

//var HEROKU_URL = "https://alldata.herokuapp.com/";

function whatyousay(botResponse, urlToCheck) {
	
	    if (urlToCheck === '' ) {
        say(botResponse, 'Вы написали ? ' + '' + urlToCheck );
			return;
	}
}	


	
function hear(response, messages) {
    response.send(new TextMessage(messages));
}
//#####################################    Weather #####################################################

bot.onTextMessage(/ПОГОДА|weather/, (message, response) => {
	bot.sendMessage(response.userProfile, new TextMessage("Для пошуку Погоди оберіть параметри пошуку .... \ud83d\udc47 ")).then(()=>{
	keyboard.get_keyboard_weather(response.userProfile);
	//if search by one day
bot.onTextMessage(/За один день|oneday/, (message, response) => {
	bot.sendMessage(response.userProfile, new TextMessage("Для пошуку Погоди за один день вкажіть назву міста, населеного пункту .... \ud83d\udc47 ")).then(()=>{
	bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
			wheather.wheather(obj,response1);
            bot.sendMessage(response.userProfile, new TextMessage("Погодні умови за Вашим запитом = > " + messages.text + " надійдуть якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_weather(response1);}).catch(err=>{throw err})
				   }).then(()=>{keyboard.get_keyboard_weather(response1);}).catch(err=>{throw err})	
	}).catch(err=>{throw err})
})
//if search by one day	
	//if search by one day
bot.onTextMessage(/за 5 днів|five_days/, (message, response) => {
	bot.sendMessage(response.userProfile, new TextMessage("Для пошуку Погоди за п'ять днів вкажіть назву міста, населеного пункту .... \ud83d\udc47 ")).then(()=>{
	bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
			wheather.wheather_5days(obj,response1);
            bot.sendMessage(response.userProfile, new TextMessage("Погодні умови за Вашим запитом = > " + messages.text + " надійдуть якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_weather(response1);}).catch(err=>{throw err})
				   }).then(()=>{keyboard.get_keyboard_weather(response1);}).catch(err=>{throw err})	
	}).catch(err=>{throw err})
})
//if search by one day		
	
	}).catch(err=>{throw err})
	
	
				
			
			
	//############################################################################################################
	
		//bot.sendMessage(response.userProfile, [new TextMessage("для отримання данних оберіть тип способу отримання погоднії умов з меню  \ud83d\udc47 ")/*, new KeyboardMessage(keys_edr)*/])
	//.then(()=>{
		//console.log(`${message.latitude}, ${message.longitude}`);
		//keyboard.get_keyboard_weather(response.userProfile);
		
		//keyboard.get_keyboard_weather(response.userProfile);
		//####################### take simple search ##############################
		/*
			say(response,'Для пошуку за один день по геолокацІї натисніть 1 день та підтвердіть надання геолокаційних данних .... \ud83d\udc47 ')
		//keyboard.get_keyboard_weather_oneday(response.userProfile);
			//bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
				bot.onTextMessage(/oneday/, (messages, response) => {
					//const messageson = new LocationMessage(latitude, longitude);
		       //const messagessso = new LocationMessage(messages.latitude, longitude);
			console.log(messages);
            var response1 = response.userProfile;
            //edrModule.search(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + " надійде якнайшвидше \ud83d\udd50  "));
				   })
		*/
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
		 /*
bot.onTextMessage(/main_menu|Головне меню/, (message,response) => {
	       keyboard.get_keyboard(response.userProfile);
	
             })
			 */
          //})
       
	//##############################################################################################################
	
	
	
	
	
	
})
/*
bot.onTextMessage(/За один день|oneday/, (message,response) => {  
    var response1 = response.userProfile;
	console.log('this is response' + " " + Object.keys(response.userProfile));
	console.log('this is response' + " " + Object.values(response.userProfile));
	console.log('this is response' + " " + Object.keys(response));
	console.log('this is _bot' + " " + Object.keys(response._bot));
	console.log('this is silent' + " " + response.silent);
	console.log('this is replyType' + " " + response.replyType);
	console.log('this is chatid' + " " + response.chatId);
	console.log('this is message' + " " + Object.keys(message));
	console.log('this is message.trackingData' + " " + Object.keys(message.trackingData));
	console.log('this is message.keyboard' + " " + Object.keys(message.keyboard));
	//bot.sendMessage(response1,[new LocationMessage(latitude, longitude)])
	bot.sendMessage(response1,[new LocationMessage(latitude, longitude,[keyboard.get_keyboard_weather_one])]).then(()=>{
	bot.sendMessage(response1,[new TextMessage('Привіт отже твоя локація' + ' ' + response1.latitude + ' ' + response1.longitude)])  
	})

	})
	*/
//#######################################    TEST  ###################################################
/*
bot.onTextMessage(/./, (message, response) => {
	if (messages.text!='hi' || messages.text!='hello' || messages.text!= 'main_menu' ) {
	 	say(response,'Для пошуку тестового введіть номур машини  .... \ud83d\udc47 ');
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            test_search.testsearch(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   })
				
	
	}
	
})
*/
//####################################### Wheather ###################################################
/*
bot.onTextMessage(/ПОГОДА|weather/, (message, response) => {
	 	say(response,'Для пошуку погоди оберіть параметри пошуку  .... \ud83d\udc47 ');
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            benefic.search_benefic(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   }).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
				
	//bot.sendMessage(response.userProfile,[new TextMessage('Сервіс в розробці...')] );
	//keyboard.get_keyboard(response.userProfile);	
	
	
})
*/
//####################################### Main menu ###################################################
bot.onTextMessage(/main_menu|Головне меню/, (message,response) => {
	       keyboard.get_keyboard(response.userProfile);
	
             })
//#######################################    Benefic ###################################################
bot.onTextMessage(/benefic/, (message, response) => {
	bot.sendMessage(response.userProfile, [new TextMessage("Для пошуку беніфіціарів введіть фамілію беніфіціара або назву компаніі латиницею  .... \ud83d\udc47  ")/*, new KeyboardMessage(keys_edr)*/])
	 	.then(()=>{
			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            benefic.search_benefic(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  "));
				   }).then(()=>{keyboard.get_keyboard(response1);}).catch(err=>{throw err})
				   }).catch(err=>{throw err})
				
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
	bot.sendMessage(response.userProfile, new TextMessage("для отримання данних оберіть тип пошуку \ud83d\udc47 "))
	.then(()=>{
		keyboard.get_keyboard_avto(response.userProfile);
		//####################### take search by number in avto ##############################
		bot.onTextMessage(/number_avto|номер авто/, (message,response) => { 
		bot.sendMessage(response.userProfile, new TextMessage("Для пошуку за номером авто введіть номер авто наприклад : ВХХХХХВО \ud83d\udc47 ")).then(()=>{
					bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text.toUpperCase();
            var response1 = response.userProfile;
            car_search.carsearch(obj,response1);
		bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим номером авто = > " + messages.text.toUpperCase() + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_avto(response1);}).catch(err=>{throw err})
				       })
		            }).catch(err=>{throw err})
		         }) 
    //######################################################## end search by number in avto ############################################################
	//######################################################## search by number passport in avto ############################################################
	bot.onTextMessage(/texpass_avto|номер свідоцтва/, (message,response) => {
		bot.sendMessage(response.userProfile, new TextMessage("Для пошуку за номером свідоцтва введіть номер свідоцтва без пробілів наприклад : ХХХХХХХХХ \ud83d\udc47  ")).then(()=>{
    			bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text.toUpperCase();
            var response1 = response.userProfile;
            car_search.carsearch_texpassport(obj,response1);
		bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим номером свідоцтва = > " + messages.text.toUpperCase() + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_avto(response1);}).catch(err=>{throw err})
				                  })
						  }).catch(err=>{throw err})
		         })
	//######################################################## End search by number passport in avto ############################################################
	 
			 }).catch(err=>{throw err})
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
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_edr(response1);}).catch(err=>{throw err})
				   })
				})
	         
//############################ take search 2 parameters #############################################
         bot.onTextMessage(/two_parameters|2 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 2 параметрами наприклад : "Комунальне Київ" або "Фермерське Київська" .... \ud83d\udc47 ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_two(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_edr(response1);}).catch(err=>{throw err})
		       })
			})
		 
	//############################ take search 3 parameters #############################################
     bot.onTextMessage(/3_parameters|3 параметри/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : "81.10 Київська зареєстровано" або "Комунальне Київ зареєстровано" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_three(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_edr(response1);}).catch(err=>{throw err})
		       })
			})
		 //############################ take search kved ###########################################################
     bot.onTextMessage(/kved|кведи/, (message,response) => {  
		  say(response,'для отримання данних введіть Запит за 3 параметрами наприклад : Номер або назву кведу : "81.10", або "Діяльність посередників у торгівлі товарами широкого асортименту" \ud83d\udc47 .... ');
		  bot.once(BotEvents.MESSAGE_RECEIVED,(messages)=>{
			var obj = messages.text;
            var response1 = response.userProfile;
            edrModule.search_kved(obj,response1);
			bot.sendMessage(response.userProfile, new TextMessage(" інформація за Вашим запитом = > " + messages.text + " надійде якнайшвидше \ud83d\udd50  ")).then(()=>{keyboard.get_keyboard_edr(response1);}).catch(err=>{throw err})
		       })
			})
		 //############################ switch to main menu  ###########################################################
bot.onTextMessage(/main_menu|Головне меню/, (message,response) => {
	       keyboard.get_keyboard(response.userProfile);
	
             })
          })
       })
//#######################################   edrsearch  ####################################################

bot.onTextMessage(/^hi|hello$/i, (message, response) => {
//bot.onTextMessage(/./i, (message, response) => {
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}`)).then(()=>{
		
	keyboard.get_keyboard(response.userProfile);	
		
	})
	
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

//module.exports={get_keyboard:get_keyboard};