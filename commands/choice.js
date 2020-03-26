/*CMD
  command: choice
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

//choice handler
let lang = Libs.Lang.get();
let mLi = Libs.myLib;

let curOrder = User.getProperty('curOrder');

let cafe = mLi.get_org_by_name(options.name, options.type);

if(message in options.categories){ //categories is string of keyboards
   curOrder['organization'] = options.name;
   // curOrder.purchases.push(message); not needed because it's categories handler
   User.setProperty('curOrder', curOrder,'Object');

   mLi.bKeys("choice", lang['choice'], options.categories);

   let items_array = Object.getOwnPropertyNames(cafe['products'][message]);
   let items_keys = mLi.mKeys(items_array);

   Bot.sendKeyboard(items_keys , message);
   Bot.run({
      command:'purchase',
      options: {categories_keys: options.categories}
   });
} else {
  let back = User.getProperty('back');
  mLi.back(back.cmd, back.txt, back.keys, message);
}
