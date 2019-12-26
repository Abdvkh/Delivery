/*CMD
  command: answer
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

mLi    = Libs.myLib;
lang   = Libs.Lang.get();
transl = lang.translations;
opt    = User.getProperty('curOrder');

if (message == transl.agr){
  types = Object.getOwnPropertyNames(lang[opt.code]['menu']);
  keyboard = mLi.mKeys(types);
  last_keyboard = lang.agr + ',' + lang.order + ",\n" + lang.mainmenu;

  mLi.bKeys('answer', lang.again, last_keyboard);

  Bot.sendKeyboard(keyboard, lang[opt.code]['text']);

} else if (message == lang.order){
  keyboard = lang.payment.but + ',' + transl.back + ',' + transl.mainmenu;
  mLi.bKeys('answer', lang.payment.text, keyboard);

  Bot.sendKeyboard(keyboard, lang.payment.text);
  Bot.runCommand('payment');

} else if (message == transl.mainmenu){
  Bot.runCommand('menu');

}
