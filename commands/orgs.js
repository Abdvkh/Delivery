/*CMD
  command: orgs
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

//waits for an answer
//from the orgs
let lang = Libs.Lang.get();
let mLi = Libs.myLib;

let type = options.type;

let orgs = mLi.get_orgs_by_type(type);

let curOrder = User.getProperty('curOrder');

function orgs_name(org){
   return org['name'];
}

if(orgs.length <= 1){
   let back = User.getProperty("back");
   mLi.back(back.cmd, back.txt, back.keys,message);

   Bot.sendMessage('There is no orgs');
   Bot.runCommand('type');
}

for(let i=0; i < orgs.length; i++){
   let org = orgs[i];

   if(message == org['name']){
       let categ = Object.getOwnPropertyNames(org['products']);
       let categories_keys = mLi.mKeys(categ);

       let orgs_names = mLi.mKeys(orgs.every(orgs_names));
       mLi.bKeys('orgs', lang['choose'], orgs_names);

       curOrder['organization']['name'] = message;
       User.setProperty('curOrder', curOrder, 'Object');

       Bot.sendKeyboard(categories_keys, lang['choice']);
       Bot.run({
          command:'choice',
          options: {
             type: type,
             name: org['name'],
             categories: categories_keys
          }
       });
       break;
   }
}
