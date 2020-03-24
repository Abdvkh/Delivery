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
let tr    = Libs.Lang.get();
let lang  = tr.translations;
let mLi   = Libs.myLib;
let order = User.getProperty('curOrder');

if (message > 0){
    order.amount.push(message);
    User.setProperty('curOrder', order, 'Object');

    mLi.rBasket();

    let order    = User.getProperty('curOrder');
    let keyboard = lang.agr + ',' + tr.order + ",\n" + lang.mainmenu;

    Bot.sendMessage(order.msg);
    Bot.sendKeyboard(keyboard,lang.again);
    mLi.bKeys('amount' , lang.again, keyboard);
    Bot.runCommand('answer');
}else{
    let back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
