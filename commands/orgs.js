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

if(orgs.length < 1){
   let back = User.getProperty("back");
   mLi.back(back.cmd, back.txt, back.keys,message);

   Bot.sendMessage('There is no orgs');
   Bot.runCommand('type');
}

for(let i=0; i < orgs.length; i++){
   let org = orgs[i];

   if(message == org['name']){
      let categ = Object.getOwnPropertyNames(org['products']);

      if (categ) {
         let categories_keys = mLi.mKeys(categ);

         mLi.bKeys('orgs', lang['choose'], options.type_orgs_names_keys);

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
      } else {
         Bot.sendMessage(lang.in_dev);
         Bot.run({
            command: 'orgs',
            options:{
               type_orgs_names_keys: options.type_orgs_names_keys
            }
         });
      }
      break;
   }
}
