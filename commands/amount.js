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
mLi   = Libs.myLib;
order = User.getProperty('curOrder');

if (message > 0){
    order.amount.push(message);
    User.setProperty('curOrder', order, 'Object');
    mLi.rBasket();
    order = User.getProperty('curOrder');
    Bot.sendMessage(order.msg);
}else{
    back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
