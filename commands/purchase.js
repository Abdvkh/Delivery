/*CMD
  command: purchase
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//purchase
lang = Libs.Lang.get();
rex = lang.translations;
order = User.getProperty('curOrder');
price = lang[order.code]['menu'][order.type][message];

if ( message == rex.mainmenu ){
    types = Object.getOwnPropertyNames( lang.eb.menu );
    
    for ( var i = 0; i < types.length; i++ ){
        keyboard += types[i] + '\n' ;
    };

    keyboard += lang.translations.mainmenu ;

    Bot.sendKeyboard( keyboard, lang.eb.text );
    Bot.runCommand('choice')
};

order.purchases.push(message);
order.price.push(price);

User.setProperty('curOrder', order, 'JSON');

Bot.sendKeyboard( lang.amount + '\n' + rex.back + ',' + rex.mainmenu , message + '\n ' + price );
Bot.runCommand('amount');
