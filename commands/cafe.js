/*CMD
  command: cafe
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

//waits for an answer
//from the cafes
let lang = Libs.Lang.get();
let mLi = Libs.myLib;

let cafes = mLi.get_cafes();
let c_length = cafes.length;

let cur_order = User.getProperty('curOrder');

if(c_length <= 1){
   Bot.sendMessage('There is no cafes');
   Bot.runCommand('type');
}

for(let i=0; i < c_length; i++){
   let cafe = cafes[i];

   if(message == cafe['name']){
       let types = Object.getOwnPropertyNames(cafe['products']);
       let keyboard = mLi.mKeys(types);

       let cafesKeys = mLi.mKeys(cafes);
       mLi.bKeys('cafe', lang.cafe.choose, cafesKeys);

       User.getProperty('curOrder', cur_order, 'Object');
       Bot.sendKeyboard(keyboard, lang['choice']);
       Bot.run({
          command:'choice',
          options: {
             type: 'cafe',
             name: cafe['name'],
             categories: keyboard
          }
       });
       break;
   } else {
      let back = User.getProperty("back");
      mLi.back(back.cmd, back.txt, back.keys,message);
   };
}
