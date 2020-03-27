/*CMD
  command: admin
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard: Установить язык, \nСоздать организацию, \nСтатистика, Главное меню
  aliases:
CMD*/

let level = User.getGroup();

if (level=="Boss") {
   switch (message) {
      case 'Установить язык':
         Bot.runCommand('setLang');
         break;
      case "Создать организацию":
         Bot.runCommand('orgAdd');
         break;
      default:
         Bot.sendMessage('wrong command typed');
         Bot.runCommand('admin');
      }
} else {
   Bot.runCommand('/admins')
}
