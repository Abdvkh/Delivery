/*CMD
  command: addProds
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Формат добавления продуктов или продукта, между названием категории и продуктами *ставится "!" знак*: \n`Название категории!{"Продукт1": 1000,"Продукт2": 2000,"Продукт3": 3000, "ПродуктN": 4000} \nили\nНазвание категории!{"ПродуктN": 9000}`
  keyboard: Назад
  aliases:
CMD*/

let orgs = Bot.getProperty('orgs');
let prods = JSON.parse(message);

Object.assign(orgs.orgs_info[0]['products'], prods);
Bot.setProperty('orgs', orgs, 'Object');
Bot.sendMessage('Done!');
