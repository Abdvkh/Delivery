/*CMD
  command: org_admin
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard: Добавить категорию, \nДобавить продукты, \nСтатистика, Главное меню
  aliases:
CMD*/

let mLi = Libs.myLib;
let orgs = Bot.getProperty('orgs');
let org = orgs.orgs_info[options.org_id];

Bot.sendMessage("Ваши лимиты по категориям - *" + org['limits']['categ'] + '*, и продуктам в них - *' + org['limits']['items'] + '*');

switch (message) {
   case 'Добавить категорию':
      Bot.run({
         command: 'addCateg',
         {type: 'category',
         org_id: options.org_id}
      })
      break;
   case "Добавить продукты":
      Bot.run({
         command: 'addItems',
         {type: 'items',
         org_id: options.org_id}
      })
      break;
   case "Статистика":
      let org_stat = org['orders_recieved'];

      Bot.sendMessage("Получено заказов: " + org_stat);
      Bot.runCommand('org_admin');
      break;
   case "Главное меню":
      Bot.runCommand('/menu');
      break;
   default:
      Bot.sendMessage('wrong command');
      Bot.runCommand('org_admin');
}
