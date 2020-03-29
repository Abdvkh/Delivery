/*CMD
  command: addItems
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Формат добавления продуктов или продукта, между названием категории и продуктами *ставится "!" знак*: \n`Название категории!{"Продукт1": 1000,"Продукт2": 2000,"Продукт3": 3000, "ПродуктN": 4000} \nили\nНазвание категории!{"ПродуктN": 9000}`
  keyboard: Назад
  aliases:
CMD*/

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let exclamation = message.indexOf('!');

if (exclamation > -1) {
   Bot.sendMessage(lang.exclamation_error);
} else if (message != "Назад") {
   let additionObj = mLi.productsToObj(message);

   let categKeysArr =  Object.keys(additionObj);

   for (i = 0; i < categKeysArr.length; i++) {

      let orgs = Bot.getProperty('orgs');
      let org = orgs.orgs_info[options.org_id];
      let ilimit = org['limits']['items'];
      let categ = categKeysArr[i];
      let categoryProductsArr = Object.keys(additionObj[categ]);

      if (ilimit > categoryProductsArr.length) {
         org['products'][categ] = additionObj[categ];
         Bot.sendMessage(lang.itemsToCategAdded + ': ' + categ + '!' + JSON.stringify(additionObj[categ]));
         Bot.setProperty('orgs', orgs, 'Object');
      } else {
         Bot.sendMessage(lang.org_limit);
      }
   }
}
Bot.sendMessage(lang.admin.text);
Bot.run({
   comman: 'org_admin',
   options: {
      org_id: options.org_id
   }
});
