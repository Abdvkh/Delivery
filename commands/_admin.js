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

let level = User.getGroup();

let mLi = Libs.myLib;

let orgs = Bot.getProperty('orgs');
let org_i = mLi.pValid(message);

if(message == '123' || level == "Boss"){
   let keyss = mLi.mKeys(lang.super_admin.buttons) + ',\n onGitPush';

   User.addToGroup('Boss');
   Bot.setProperty('admin', chat.id, 'Number');

   Bot.sendKeyboard(keyss, lang.super_admin.text);
   Bot.runCommand('admin');
} else if (org_i >= 0 || level) {
   let keyso = mLi.mKeys(lang.admin.buttons);

   User.addToGroup(orgs.orgs_info[org_i]['name']);

   Bot.sendKeyboard(keyso, lang.admin.text);
   Bot.run({
      command: 'org_admin',
      options: {
         org_id: org_i
      }
   });
} else {
   Bot.sendMessage('Password is wrong!');
   Bot.runCommand('/admin');
}
