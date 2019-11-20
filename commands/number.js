/*CMD
  command: number
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

lang = Libs.Lang.get();
menu = lang.type.but;
mLi = Libs.myLib;

number = message ;

if(request['contact'] !== null){
    number = request.contact.phone_number;
} ; 

User.setProperty("Number", number, "Number");

if (message == lang.translations.back){
    Bot.runCommand('/start');
} else if(message == lang.translations.mainmenu){
    Bot.runCommand('menu');    
}else if ( number > 998000000000 && number < 999000000000 ) {
    
    keyboard = mLi.mKeys(menu);

    mLi.bKeys('number', lang.number, [lang.translations.back, keyboard]);

    Bot.sendMessage(lang.success + '\n*' + number + '*');
    Bot.sendKeyboard( keyboard, lang.type.text );
    Bot.runCommand('type');
} else {
    Bot.sendMessage(lang.error);
    Bot.sendMessage(lang.number);
    Bot.runCommand("number");
};
