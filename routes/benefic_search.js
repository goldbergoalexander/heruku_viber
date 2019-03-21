'use strict';
import './conf.js';

//#################################################################### - search kved -  ############################################################
function search_benefic(obj1,response1){
var MongoClient = require('mongodb').MongoClient;
var url1 = "mongodb://goldberg:tugdUqXR1885210623@104.248.71.0:27017/admin";
MongoClient.connect(url1,/*{ useNewUrlParser: true },*/ function(err, db) {
  if (err) throw err;
var dbo = db.db("work");
	var numbers = /[0-9]/;
var invletters = /^[a-zA-Z]+$/;
	var kved = obj1;
	var kved1  = kved.charAt(0).toUpperCase() + kved.slice(1);
	var kved2  = kved.toUpperCase();
	console.log('This is kved1 :' + kved1);
	console.log("this is kved " + kved);
	if (kved.indexOf(',')>-1 || kved.indexOf('$')>-1 || kved.indexOf('<')>-1 || kved.indexOf('?')>-1 || kved.indexOf('!')>-1 ) {
	bot.sendMessage(response1, [new TextMessage('Привіт' + ' ' + 'За запитом :' + ' ' + '_'+ '{'+ kved.toUpperCase() +'}'+ '_'+ ' '+ ' нічого не знайдено перевірте правильність написання'),new KeyboardMessage(keys)]);	
	}
	else {
	dbo.collection('owner').find({$or:[{"statementGroups.beneficialOwnershipStatements.interestedParty.name": new RegExp(kved2)},{"statementGroups.beneficialOwnershipStatements.entity.name": new RegExp(kved2)}]}).toArray()
	.then(data => { 
	var datas = '';
for (var i= 0; i< data.length; i++) {
	var obj = Object.values(data[i]);
		var datas = [
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.name
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.jurisdiction
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.foundingDate
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].entity.addresses[0].address
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.type
		+'\n',
		data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.name
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.placeOfResidence.country
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interestedParty.addresses.address
		//+'\n',
		//data[i].statementGroups[0].beneficialOwnershipStatements[0].interests.details
		
		];
		
	}
	if (datas.length > 0) {
	bot.sendMessage(response1, [new TextMessage(
	'Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + 
	'\n' +  "інформацІя згідно Вашого Запиту до боту @alldata : " + ' ' +  
        ' \n' + 
		'Імя ЮО Беніфіціара : ' +  datas[0] +   
		'Країна : ' +  datas[1] +  
		'дата заснування : ' + datas[2] +  
		//'адреса : ' + '*' + datas[3] + '*'+
		'Тип особи беніфіціарів : ' + datas[3] +    
		'Імя особи беніфіціарів  : '  + datas[4] + 
		//'Країна : ' + '*' + datas[6] + '*'+
		//'адреса : ' + '*' + datas[6] + '*'+
		//'деталі : ' + '*' + datas[7] + '*'+
		 '\n' + ' \n' + '\n' )])
	.then(()=>{
	keyboard.get_keyboard(response1);	
	})	
		
		
	}
	else {
		
		bot.sendMessage(response1,new TextMessage('Привіт' + ' ' + ' Ви обрали розділ Бенефіціари :' + '*' + '\n' +  " Нажаль за Вашим запитом" + ' ' + '*' + kved2 + '*'+ " " +  "нічого не знайдено " + ' ' +  
        'Можливо Ви невірно ввели запит  ' ));
		keyboard.get_keyboard(response1);	
		}

	   })
	.catch(error => {
    console.log(error);
                 })
	          }
	      })
       }
function answear(response) {
 console.log('This is EX : ' + ex);
		//say(response,'Lets see what i can do else ;-)' + '' + ex);
}		
module.exports = {search_benefic:search_benefic};