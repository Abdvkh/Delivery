/*CMD
  command: orgAdd
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: adding organization format: `name|password|type|admin's id|categ limit|items per categ limit`
  keyboard: Установить язык, \nСоздать организацию, \nСтатистика, Главное меню
  aliases: Создать организацию
CMD*/

let mLi = Libs.myLib;
let level = User.getGroup();

if (level == "Boss") {
   let details = message.split('|');

   mLi.createOrg(details);
   Bot.sendMessage('Organization successfully created!');
} else {
   Bot.sendMessage('Operation did not succed');
}
Bot.runCommand('admin');
