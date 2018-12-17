'use strict';
const util = require('util'),
keyboard = require('./keyboards.js'),
axios = require('axios'),
response1 = require('../index.js'),
ViberBot = require('viber-bot').Bot,
BotEvents = require('viber-bot').Events,
RichMedia = require('viber-bot').Message.RichMedia,
TextMessage = require('viber-bot').Message.Text,
KeyboardMessage = require('viber-bot').Message.Keyboard,
winston = require('winston'),
toYAML = require('winston-console-formatter');
//############### keyboard ######################

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
				 var URL = datas[a].url;

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
var ex = datas1;
		bot.sendMessage(response1,[new TextMessage('Останні новини \ud83d\udc47'),new RichMedia(SAMPLE_RICH_MEDIA)]).then(()=>{
		keyboard.get_keyboard(response1);	
		})
	
})
.catch(error => {
    console.log(error);
  });
}

module.exports = {news:news};