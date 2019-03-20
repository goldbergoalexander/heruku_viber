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

//################################################################  Wheather for 1 day ##########################################################
function wheather (obj1,response1){
	var query1 = encodeURI(obj1);
		axios({ method: 'get',
	     headers: {'Content-type': 'application/json; charset=utf8'},
	     url : ('http://api.openweathermap.org/data/2.5/weather?q='+query1+'&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua&units=metric'),
	  	     })
		 .then(result=>{
		var datas = result['data'];
		var coord1 = Object.values(datas.coord)[1];   //latitude
		var coord2 = Object.values(datas.coord)[0];
		var weather1  = Object.values(datas.weather)[0]; 
		var weather2  = Object.values(weather1)[2];
		var wind1  = Object.values(datas.wind)[0];
		var main11 = Object.values(datas.main)[0];
		var main1 = parseInt(main11);
		bot.sendMessage(response1,new TextMessage(
        'Коротко'
		+ '\n'
		+ ' координати міста: ' + ' ' + ' дов.'+ coord1 + ' ' + ' шир.' + coord2
		+ '\n'
		+ ' Погодні умови: ' + ' ' + weather2 
		+ '\n'
		+ ' Температура: ' + ' ' + main1 + '.cel' 
		+ '\n'
		+ ' Швидкість вітру: ' + ' ' + wind1 + '.m/с' 
		+ '\n'
		)).then(()=>{keyboard.get_keyboard(response1);})
		 }).catch(err=>{console.log(err); console.log(err.result)})
}
//################################################################  END Wheather for 1 day ##########################################################
//################################################################# Wheather for 5 days ##########################################################
function wheather_5days(obj1,response1){
	var query1 = encodeURI(obj1);
		axios({ method: 'get',
	     headers: {'Content-type': 'application/json; charset=utf8'},
	     url : ('http://api.openweathermap.org/data/2.5/forecast?q='+query1+'&units=metric&appid=e6463c8b6e961ecb1bdb04de35d1d8e7&lang=ua'),
		 	  	     })
		 .then(result=>{
		var datas = result['data'];
		var ex = datas;
		var weather1 = [];
		var weather2 = [];
		for (var i=0; i<datas.list.length;i++) {
			var time  = datas.list[i].dt_txt;
			var icon  = 'http://openweathermap.org/img/w/'+ datas.list[i].weather[0].icon;
			if (time.match(/12:00:00/) ||  time.match(/18:00:00/)){
			var weather = 
		'\n'
        +'День :' + ' ' + time.substring(0,10)
        +'\n'
        + ''+'час:' + ''+ time.substring(10,16)
        +'\n'
        +''+ 'дата та час:'+ ''+ datas.list[i].dt_txt
        + '\n'
        + ''+'температура мін:'+ ''+ datas.list[i].main.temp_min
        +'\n'
        + ''+'температура макс:'+ ''+ datas.list[i].main.temp_max 
        +'\n'
        + ''+ 'погода:'+ ''+ datas.list[i].weather[0].description  
        +'\n'
        + ''+ 'вітер:'+ ' ' + 'швидкість' + ' ' +  datas.list[i].wind.speed + '' + 'м/с'+' ' + 'направлення' + ' ' + datas.list[i].wind.deg + '' + 'град.' + ''
        +'\n';
			weather1.push(weather);
			}
			}
		bot.sendMessage(response1,new TextMessage(
        'Детально : '
		+ '\n' + weather1 + '\n'
		)).then(()=>{keyboard.get_keyboard_weather(response1);})
		 }).catch(err=>{console.log(err); console.log(err.result)})
		}
//################################################################  END Wheather for 5 days ##########################################################

module.exports  = {
	wheather:wheather,
    wheather_5days:wheather_5days
	}


/*

*/

//bot.sendMessage(response1,[new LocationMessage(latitude, longitude, [keyboard.get_keyboard_weather(response1)])])