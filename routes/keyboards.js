'use strict';

const
config = require('./conf.js'),
bot = config.bot,
KeyboardMessage = require('viber-bot').Message.Keyboard;




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
		"ActionBody": "weather",
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
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>БЕНІФІЦІАРИ</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "benefic",
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
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
	}, {
		"Columns": 2,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Новини</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "news",
		"BgColor": "#dd8157",
		"Image": "https://s18.postimg.org/ylmyu98et/more_Options.png"
	}
	]
};
//############### keyboard ######################
//#######################################################   Keyboard_edr    ######################################################################################
var keys_edr  = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Звичайний</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "Simple",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>2 параметри</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "two_parameters",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/ntpef5syd/french.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>3 параметри</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "3_parameters",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
	}, {
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>кведи</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "kved",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}, {
		"Columns": 6,
		"Rows":2,
		"Text": "<br><font color=\"#494E67\"><b>Головне меню</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "main_menu",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
	} ]
};

	var keys_weather  = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 3,
		"Rows": 1,
		"Text": "<br><font color=\"#494E67\"><b>За один день</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": 'reply',
		'Map':{
		'Map.Latitude': 'latitude',
		'Map.Longitude':'Longitude',
		},
				"ActionBody": "oneday",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	},
	{
		"Columns": 3,
		"Rows": 1,
		"Text": "<br><font color=\"#494E67\"><b>за 5 днів</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "five_days",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/ntpef5syd/french.png"
	},
	{
		"Columns": 6,
		"Rows": 1,
		"Text": "<br><font color=\"#494E67\"><b>Головне меню</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "main_menu",
		"BgColor": "#a5ff33",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}
	]
};//######
var keys_weather_oneday = {
	"Type": "keyboard",
	"Buttons": [{
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>За один день</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "oneday_key",
		"BgColor": "#f7bb3f",
		"Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
	},
	{
		"Columns": 3,
		"Rows": 2,
		"Text": "<br><font color=\"#494E67\"><b>Головне меню</b></font>",
		"TextSize": "large",
		"TextHAlign": "center",
		"TextVAlign": "middle",
		"ActionType": "reply",
		"ActionBody": "main_menu_weather",
		"BgColor": "#7eceea",
		"Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
	}]
};
//#######################################################   Reyboard_edr    ######################################################################################

  
function get_keyboard(response) {
	bot.sendMessage(response,new KeyboardMessage(keys))
	}
function get_keyboard_edr(response) {
	bot.sendMessage(response,new KeyboardMessage(keys_edr))
	
}
function get_keyboard_weather(response) {
	bot.sendMessage(response,new KeyboardMessage(keys_weather))
	
}
function get_keyboard_weather_one(response) {
	bot.sendMessage(response,new KeyboardMessage(keys_weather_oneday))
	
}

module.exports = {get_keyboard:get_keyboard, get_keyboard_edr:get_keyboard_edr,get_keyboard_weather:get_keyboard_weather,get_keyboard_weather_one:get_keyboard_weather_one};