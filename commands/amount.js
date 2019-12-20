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
lang  = Libs.Lang.get();
mLi   = Libs.Lang;
order = User.getProperty('curOrder');

if (typeof message == 'number'){
    order.amount.push(message);
    mLi.rBasket(order);
    User.setProperty('curOrder', order, 'JSON');
    Bot.sendMessage(order.msg + order.sum);
}else{
    back = User.getProperty('back');
    mLi.back(back.cmd, back.txt, back.keys, message);
};
