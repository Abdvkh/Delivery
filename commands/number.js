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
keyboard = '';

number = message ;

if ( Object.keys(request.contact).length > 0 ){
    number = request.contact.phone_number;
};

User.setProperty("Number", number, "Number");

back = {
    cmd: 'number',
    txt: lang.number,
    keys: lang.translations.back
};
User.setProperty('back',back,'Object');


if ( number > 998000000000 && number < 999000000000 ) {
    
    num = User.getProperty("Number");
    
    for (var i = 0; i < menu.length;i++){
        
        keyboard += menu[i] ;
        
        if ( i % 2 == 0 ){
            keyboard += '\n,';
        }
    };
    
    keyboard += lang.translations.back + lang.translations.mainmenu ;
    
    Bot.sendMessage(lang.success + '\n*' + num + '*');
    Bot.sendKeyboard( keyboard, lang.type.text );
    Bot.runCommand('type');
} else if ( message == lang.translations.back ){
    Bot.runCommand('/start');
} else {
    Bot.sendMessage(lang.error);
    Bot.sendMessage(lang.number);
    Bot.runCommand("number");
};

