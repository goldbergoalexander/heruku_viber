'use strict';
var util = require('util');
const axios = require('axios');
//const iconv = require('iconv');
//const utf8 = require('utf8');	
const response1 = require('../index.js');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const RichMedia = require('viber-bot').Message.RichMedia;
const TextMessage = require('viber-bot').Message.Text;
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const winston = require('winston');
const toYAML = require('winston-console-formatter');
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
// Multiple messages
function say(response, message) {
    response.send(new TextMessage(message));
}


function news(response1){ 
   axios({ method: 'get',
	    headers: {'Content-type': 'application/json; charset=utf8'
  },
      url: ('https://newsapi.org/v2/top-headlines?country=ua&apiKey=4b80f3fbc58c4a96b1ecff9d84c38b05'),
    })
.then(result => {
var datas = result.data.articles;
var datas1 = [];
		console.log(datas.length);
		
			for (var a =0 ; a<=5;a++){
				 var URL = datas[a].url,
	                 IMAGE = datas[a].urlToImage;
//################################################## rich media ###################




//################################################## rich media ###################				
				
				
				
				
		/*		
var news = 
	'\n'+ datas[a].source.name +
	'\n' + datas[a].title +
	'\n' + datas[a].url +
	'\n' + datas[a].urlToImage +
    '\n';
	*/
	
var SAMPLE_ALT_TEXT = "upgrade now!"

//const message = new RichMedia(SAMPLE_RICH_MEDIA);
//datas1.push(message);
			}
var SAMPLE_RICH_MEDIA = {
	"Type": 'rich_media',
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 7,
	"BgColor": "#FFFFFF",
	"Buttons": [
	 {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":datas[0].url,
            "Image":datas[0].urlToImage
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":datas[0].title,
            "ActionType":"open-url",
            "ActionBody":datas[0].url,
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[0].url,
            "Text":"<font color=#ffffff>Перейти</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody": datas[0].url,
            "Text":"<font color=#8367db>ДЕТАЛЬНО</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         },
		 //####################  secont news #####################################################
         {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":datas[1].url,
            "Image": datas[1].urlToImage
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":datas[1].title,
            "ActionType":"open-url",
            "ActionBody":datas[1].url,
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[1].url,
            "Text":"<font color=#ffffff>Перейти</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[1].url,
            "Text":"<font color=#8367db>ДЕТАЛЬНО</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         },
	               //####################  third news #####################################################
		{
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":datas[2].url,
            "Image": datas[2].urlToImage
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":datas[2].title,
            "ActionType":"open-url",
            "ActionBody":datas[2].url,
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[2].url,
            "Text":"<font color=#ffffff>Перейти</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[2].url,
            "Text":"<font color=#8367db>ДЕТАЛЬНО</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         },
				   //####################  fourth news #####################################################
		{
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":datas[3].url,
            "Image": datas[3].urlToImage
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":datas[3].title,
            "ActionType":"open-url",
            "ActionBody":datas[3].url,
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[3].url,
            "Text":"<font color=#ffffff>Перейти</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":datas[3].url,
            "Text":"<font color=#8367db>ДЕТАЛЬНО</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         },		   
				   
				   
				   
				   
				   //####################  fourth news #####################################################
	]
};



//var fname = messages.chat.first_name.toUpperCase();

var ex = datas1;
		console.log(datas1);
		bot.sendMessage(response1,[new TextMessage('Останні новини \ud83d\udc47'),new RichMedia(SAMPLE_RICH_MEDIA),new KeyboardMessage(keys)]);
		
})
.catch(error => {
    console.log(error);
  });
}

module.exports = {news:news};