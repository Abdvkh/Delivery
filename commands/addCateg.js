/*CMD
  command: addCateg
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Формат добавления категории(-ий), между категориями ставится "," знак: \n`Категория1, Категория2, КатегорияN` или `Категория1`
  keyboard: Назад
  aliases:
CMD*/

let lang = Libs.Lang.get();
let comma = message.indexOf(',');

if (message != "Назад") {
   if (comma > -1) {
      let categories = message.split(',');
   } else {
      let categories = new Array();
      categories.push(message);
   }
   let orgs = Bot.getProperty('orgs');
   let org = orgs.orgs_info[options.org_id];
   let productsObj = org['products'];
   let categ = Object.keys(productsObj);
   let limit = org['limits']['categ'];
   let addingAmount = parseInt(limit) - parseInt(categ.length);

   if (categ.includes(message)) {
      Bot.sendMessage(lang.categExists);
   } else if (limit > categ.length && limit => addingAmount) {

      for(i=0; i < categories.length; i++){
         productsObj[categories[i] = {};
         Bot.sendMessage(lang.categAdded + ': ' + categories[i]);
      }

      Bot.setProperty('orgs', orgs, 'Object');
   } else {
      Bot.sendMessage(lang.org_limit);
   }
}

Bot.sendMessage(lang.admin.text);
Bot.runCommand('org_admin');
