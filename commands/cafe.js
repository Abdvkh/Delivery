/*CMD
  command: cafe
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
let lang = Libs.Lang.get();
let mLi = Libs.myLib;

cur_order = User.getProperty('curOrder');

if(message == 'Everest Burger'){

    cur_order.code = 'eb';

    types = Object.getOwnPropertyNames(lang[cur_order.code]['menu']);
    keyboard = mLi.mKeys(types);

    cafesKeys = mLi.mKeys(lang.cafe.cafes);

    mLi.bKeys('kafedan', lang.cafe.choose, cafesKeys);

    User.getProperty('curOrder', cur_order, 'Object');
    Bot.sendKeyboard( keyboard, lang[cur_order.code]['text'] );
    Bot.runCommand('choice');

} else {

    back = User.getProperty("back");

    mLi.back(back.cmd, back.txt, back.keys,message);

};
