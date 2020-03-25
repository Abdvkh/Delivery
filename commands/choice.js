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

let cafe = mLi.get_cafe_by_name(options.name);

if(message in options.categories){
   curOrder['organization'] = options.name;
   curOrder['purchases'] = message;
   User.setProperty('curOrder', curOrder,'Object');

   mLi.bKeys("choice", lang['choice'], options.categories);

   let items = Object.getOwnPropertyNames(cafe['products'][message]);

   Bot.sendKeyboard( items , message );
   Bot.runCommand('purchase');
}else{
  back = User.getProperty('back');
  mLi.back(back.cmd, back.txt, back.keys, message);
}
