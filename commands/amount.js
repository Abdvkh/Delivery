/*CMD
  command: amount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//amount
lang = Libs.Lang.get();
rex = lang.translations;
order = User.getProperty('curOrder');
order.amount.push(message)

if ( message == rex.mainmenu ){
    choice = lang[order.code]['menu'][message];
    types = Object.getOwnPropertyNames( choice );
    
    for ( var i = 0; i < types.length; i++ ){
        keyboard += types[i] + '\n' ;
    };

    keyboard += lang.translations.mainmenu ;

    Bot.sendKeyboard( keyboard, order.type );
    Bot.runCommand('purchase');
};

order.basket();
User.setProperty('curOrder', order, 'JSON');

Bot.sendMessage(msg);
