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
var mLi = Libs.myLib;
var opt = {
  purchases: [],
  amount: [],
  price: [],
  location: [],
  msg: undefined,
  sum: undefined,
};

if(message == 'Everest Burger'){
    opt.code = 'eb';

    User.setProperty( 'curOrder', opt, 'Object' );

    types = Object.getOwnPropertyNames(lang[opt.code]['menu']);
    keyboard = mLi.mKeys(types);

    cafesKeys = mLi.mKeys(lang.cafe.cafes);

    mLi.bKeys('kafedan', lang.cafe.choose, cafesKeys);

    Bot.sendKeyboard( keyboard, lang[opt.code]['text'] );
    Bot.runCommand('choice');
} else {
  back = User.getProperty("back");

  mLi.back(back.cmd, back.txt, back.keys,message);
};
