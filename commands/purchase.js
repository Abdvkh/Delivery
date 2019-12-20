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
lang  = Libs.Lang.get();
rex   = lang.translations;
order = User.getProperty('curOrder');
price = lang[order.code]['menu'][order.type][message];
mLi   = Libs.myLib;

if (message in lang[order.code]['menu'][order.type]) {
    keyboard = '';    

    for ( var i = 0; i < 9; i++ ){
        keyboard +=  (i + 1) + ',' ;
        if((i+1)%3==0){
          keyboard += '\n';
        }
    };
    
    keyboard += rex.back + ',' + rex.mainmenu;

    order.purchases.push(message);
    order.price.push(price);
    User.setProperty('curOrder', order, 'Object');

    Bot.sendKeyboard(keyboard, message);

    Bot.runCommand('amount');
} else {
    back = User.getProperty("back");
    mLi.back(back.cmd, back.txt, back.keys, message);
};



