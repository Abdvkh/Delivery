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

if (message != "Назад") {
   let categories = message.split(',');
   let orgs = Bot.getProperty('orgs');
   let org = orgs.orgs_info[options.org_id];

   if (org['limits']['categ'] > Object.keys(org['products']).length) {
      for(i=0; i<categories.length; i++){
         Object.assign(org['products'], {categories[i]:{}});
         Bot.sendMessage('Данная категория ' + categories[i] + 'добавлена!');
      }

      Bot.setProperty('orgs', orgs, 'Object');
   } else {
      Bot.sendMessage(lang.org_limit);
   }
}
Bot.sendMessage(lang.admin.text);
Bot.runCommand('org_admin');
