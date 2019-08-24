/*CMD
  command: kafedan
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//waits for an answer
//from the cafes
lang = Libs.Lang.get();
mLi = Libs.myLib
opt = { 
  purchases: [],
  amount: [],
  price: [],
};

var arraycontainscafe = (lang.cafe.cafes.indexOf(message) > -1);

if (arraycontainscafe){

if ( message == 'Everest Burger') {
    opt.code = 'eb' 
};

User.setProperty( 'curOrder', opt, 'Object' );

types = Object.getOwnPropertyNames( lang[opt.code]['menu'] );

mLi.mKeys(types);

Bot.sendKeyboard( keyboard, lang[opt.code]['text'] );
Bot.runCommand('choice');
} else {
  mLi.back(back.cmd, back.txt, back.keys[0]);
};