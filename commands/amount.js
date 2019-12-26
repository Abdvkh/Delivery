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
tr    = Libs.Lang.get();
lang  = tr.translations;
mLi   = Libs.myLib;
order = User.getProperty('curOrder');

if (message > 0){
    order.amount.push(message);
    User.setProperty('curOrder', order, 'Object');
    mLi.rBasket();

    order    = User.getProperty('curOrder');
    keyboard = lang.agr + ',' + tr.order + ",\n" + lang.mainmenu;

    Bot.sendMessage(order.msg);
    Bot.sendKeyboard(keyboard,lang.again);
    Bot.runCommand('answer');
}else{
    back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
