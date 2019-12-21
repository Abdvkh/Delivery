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
mLi   = Libs.Lang;
order = User.getProperty('curOrder');

if (message > 0){
    order.amount.push(message);
    order = mLi.rBasket(order);
    User.setProperty('curOrder', order, 'Object');
    Bot.sendMessage(order.msg);
}else{
    back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
