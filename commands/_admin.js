/*CMD
  command: /admin
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Пожалуйста введите пароль чтобы войти в админку
  keyboard: Главное меню
  aliases:
CMD*/

let lang = Libs.Lang.get();
let tr = lang.translations;

let mLi = Libs.myLib.get();

let orgs = mLi.get_orgs();

if(message == '123'){
  let keys = mLi.mKeys(lang.super_admin.buttons);
  Bot.sendKeyboard(keys, lang.super_admin.text);
} else if (message in orgs.passwords) {
  let keys = mLi.mKeys(lang.admin.buttons);
  Bot.sendKeyboard(keys, lang.admin.text);
} else {
  Bot.sendMessage('Password is wrong!');
  Bot.runCommand('menu');
}
