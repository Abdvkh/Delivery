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

let lang = Libs.Lang.get();
let level = User.getGroup();

if (level=="Boss") {
   switch (message) {
      case 'Установить язык':
         Bot.runCommand('setLang');
         break;
      case "Создать организацию":
         Bot.runCommand('orgAdd');
         break;
      case "Статистика":
         let stat = "Total: " + statistics.total +
                    "\nGroup chats: " + statistics.group_chats_count +
                    "\nUser chats: " + statistics.user_chats_count +
                    "\nSuper group chats: " + statistics.super_group_chats_count +

                    "\nActive during last day: " + statistics.active_during_last_day +
                    "\nActive during last week: " + statistics.active_during_last_week

         Bot.sendMessage(lang.bots_stat + ":\n\n" + org_stat);
         Bot.runCommand('admin')
         break;
      case "Главное меню":
         Bot.runCommand('/menu')
         break;
      default:
         Bot.sendMessage('wrong command typed');
         Bot.runCommand('admin');
      }
} else {
   Bot.runCommand('/admin')
}
