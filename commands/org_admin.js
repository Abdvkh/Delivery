/*CMD
  command: org_admin
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Добро подаловать в админку
  keyboard: Добавить категорию, \nДобавить продукты, \nСтатистика, Главное меню
  aliases:
CMD*/

let mLi = Libs.myLib;
let org = mLi.getOrgById(options.org_id);

Bot.sendMessage("Ваши лимиты по категориям - *" + org['limist']['categ'] + '*, и продуктам в них - *' + org['limist']['items'] + '*');

switch (message) {
   case 'Добавить категорию':
      Bot.run({
         command: 'addCateg',
         options: {
            type: 'category',
            org_id: options.org_id
         }
      })
      break;
   case "Добавить продукты":
         Bot.run({
            command: 'addItems',
            options: {
               type: 'items',
               org_id: options.org_id
            }
         })
         break;
   case "Статистика":
      let org_stat = org['orders_recieved'];

      Bot.sendMessage("Получено заказов: " + org_stat);
      Bot.runCommand('org_admin')
      break;
   case "Главное меню":

      break;
   default:
      Bot.sendMessage('wrong command');
      Bot.runCommand('org_admin');
}
