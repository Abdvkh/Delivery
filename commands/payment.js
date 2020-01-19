/*CMD
  command: payment
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

lang  = Libs.Lang.get();
tr    = lang.translations;
order = User.getProperty('curOrder');

switch(message){
  case 'Click':
  case 'Payme':
    order['payment'] = 'Click/Payme';
    Bot.sendKeyboard(, lang.location);
    Bot.runCommand('location');
    break;
  case 'Naqd' || 'Наличка':
    order['payment'] = 'Naqd/Наличка';
    Bot.sendKeyboard(, lang.location);
    Bot.runCommand('location');
    break;
  default:
    Bot.sendMessage(lang.payment.text);
    Bot.runCommand('payment');
}
