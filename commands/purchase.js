/*CMD
  command: purchase
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

//purchase
let lang  = Libs.Lang.get();
let mLi   = Libs.myLib;

let trn   = lang.translations;
let categ = options.categories_keys;

let curOrder = User.getProperty('curOrder');
let curOrgInfo = curOrder['organization'];

let org = mLi.get_org_by_name(curOrgInfo['name'], curOrgInfo['type']);

if (message in org['products'][categ]) {
   let price = org['products'][categ][message];

   let numbersKeys = '';
   for ( var i = 0; i < 9; i++ ){
     numbersKeys +=  (i + 1) + ',' ;

     if((i+1)%3==0){
         numbersKeys += '\n';
      }
   };
   numbersKeys += trn.back + ',' + trn.mainmenu;

    curOrder.purchases.push(message);
    curOrder.prices.push(price);
    User.setProperty('curOrder', curOrder, 'Object');

    Bot.sendKeyboard(numbersKeys, message);
    Bot.runCommand('amount');
} else {
    let back = User.getProperty("back");
    mLi.back(back.cmd, back.txt, back.keys, message);
};
