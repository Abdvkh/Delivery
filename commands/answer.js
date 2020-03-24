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

let mLi    = Libs.myLib;
let lang   = Libs.Lang.get();
let transl = lang.translations;
let opt    = User.getProperty('curOrder');

switch (message) {
    case transl.agr:
        types = Object.getOwnPropertyNames(lang[opt.code]['menu']);
        keyboard = mLi.mKeys(types);
        last_keyboard = lang.agr + ',' + lang.order + ",\n" + lang.mainmenu;

        mLi.bKeys('answer', lang.again, last_keyboard);

        Bot.sendKeyboard(keyboard, lang[opt.code]['text']);

        break;
    case lang.order:
        keyboard = lang.payment.but + ',' + transl.back + ',' + transl.mainmenu;
        mLi.bKeys('answer', lang.payment.text, keyboard);

        Bot.sendKeyboard(keyboard, lang.payment.text);
        Bot.runCommand('payment');

        break;
    default:
        Bot.runCommand('menu');
}
