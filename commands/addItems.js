/*CMD
  command: addItems
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer: Формат добавления продуктов или продукта, между названием категории и продуктами *ставится "!" знак*: \n`Название категории!{"Продукт1": 1000,"Продукт2": 2000,"Продукт3": 3000, "ПродуктN": 4000} \nили\nНазвание категории!{"ПродуктN": 9000}`
  keyboard: Назад
  aliases:
CMD*/

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let exclamation = message.indexOf('!');
let options = options.options;

if (exclamation != -1) {
   Bot.sendMessage(lang.exclamation_error);
} else if (message != "Назад") {
   let addition = mLi.productsToObj(message);
   let orgs = Bot.getProperty('orgs');
   let org = orgs.orgs_info[options.org_id];
   let ilimit = org['limits']['items'];
   let categKeysArr =  Object.keys(addition);

   for (var i = 0; i < categKeysArr.length; i++) {
      let categ = categKeysArr[i];
      let categoryProductsArr = Object.keys(addition[categ]);

      if (ilimit > categoryProductsArr.length) {
         Object.assign(org['products'], {categ: addition[categ]});

         Bot.setProperty('orgs', orgs, 'Object');
      } else {
         Bot.sendMessage(lang.org_limit);
      }
}
Bot.sendMessage(lang.admin.text);
Bot.runCommand('org_admin');
