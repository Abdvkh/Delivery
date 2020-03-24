/*CMD
  command: orgAdd
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: adding organization format: `name|password|type`
  keyboard: Установить язык, Создать организацию, Статистика
  aliases:
CMD*/

let mLi = Libs.myLib;
let details = message.split('|');

mLi.create_organization(details);
Bot.sendMessage('Organization successfully created!');
Bot.runCommand('/admin');
