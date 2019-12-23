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
lang  = Libs.Lang.get().translations;
mLi   = Libs.myLib;
order = User.getProperty('curOrder');

if (message > 0){
    order.amount.push(message);
    User.setProperty('curOrder', order, 'Object');
    mLi.rBasket();

    order    = User.getProperty('curOrder');
    keyboard = lang.agr + ',' + lang.disagr + ",\n" + lang.mainmenu;

    Bot.sendKeyboard(keyboard, order.msg + lang.again);
}else{
    back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
