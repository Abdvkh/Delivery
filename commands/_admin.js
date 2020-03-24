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

let boss = User.getGroup();

let mLi = Libs.myLib;

let orgs = Bot.getProperty('orgs');
let org_i = mLi.pValid(message);

if(message == '123' || boss=="Boss"){
  let keys = mLi.mKeys(lang.super_admin.buttons);
  User.addToGroup('Boss');
  Bot.sendKeyboard(keys, lang.super_admin.text);
} else if (org_i >= 0) {
  User.addToGroup(orgs.orgs_info[org_i]['name']);
  let keys = mLi.mKeys(lang.admin.buttons);
  Bot.sendKeyboard(keys, lang.admin.text);
} else {
  Bot.sendMessage('Password is wrong!');
  Bot.runCommand('menu');
}
