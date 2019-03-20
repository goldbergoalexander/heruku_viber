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


function wheather (obj,response1){
	var query1 = obj.toLowerCase();
	axios({ method: 'get',
	
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
	
	  url : ('http://api.openweathermap.org/data/2.5/weather?q='+ query1 + '&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua&units=metric'),
	     })
		 .then(result => { 
		console.log('this is url : ' + 'http://api.openweathermap.org/data/2.5/weather?q='+ query1 + '&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua&units=metric' )
		var datas = result['data'];
		var data1 = datas.datas;
		var ex = datas;
		var ex1 = datas[Object.values(datas)[0]]; 
		var ex11 = Object.values(datas)[0]; 
		var realdata1 = Object.values(ex11);
		var realdata2 = [];
		var realdata3 = [];
		var realdata4 = [];
		for(var i=0;i<datas.length;i++) {
		var coord = Object.values(datas);
		var coord1 = coord[i];
		realdata2.push(coord1);
		
	}
		var datas1 = [];
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
				
  
	  var icon1 = 'http://openweathermap.org/img/w/'+icon+'.png';
	  var img = response.data.explanation;
	  var img2 = response.data.url;
	  var img1 = response.data;
	 
		//var imagez= bot.sendPhoto(messages.chat.id, icon1);      
		bot.sendMessage(response1,[new TextMessage(
		'Погодні умови'
		+ '\n' + 'коротко'
		+ '\n'
		+ ' координати міста: ' + ' ' + ' дов.'+ coord1 + ' ' + ' шир.' + coord2
		+ '\n'
		+ ' Погодні умови: ' + ' ' + weather2 
		+ '\n'
		+ ' Температура: ' + ' ' + main1 + '.cel' 
		+ '\n'
		+ ' Швидкість вітру: ' + ' ' + wind1 + '.m/с' 
		+ '\n'
		
		
	)]).then(()=>{keyboard.get_keyboard_weather(response1)}).catch(err=>{throw err})
	
  
	}).catch(error => {throw error}) //then
	
	
	
	
	
	
	
	
	
		
		
		
		
		}


module.exports  = {wheather:wheather}


/*

*/

//bot.sendMessage(response1,[new LocationMessage(latitude, longitude, [keyboard.get_keyboard_weather(response1)])])