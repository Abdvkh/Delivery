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
let opt = User.getProperty('curOrder');
let cafesMenu = lang[opt.code]['menu'];

if(message in cafesMenu){
  let keyboard = mLi.mKeys(types);
  let choice = cafesMenu[message];
  // let types = Object.getOwnPropertyNames(choice);
  let types = Object.getOwnPropertyNames(lang[opt.code]['menu']);
  let menu = mLi.mKeys(types);

  opt.type = message;

  User.setProperty('curOrder',opt,'Object');
  mLi.bKeys("choice", lang[opt.code]['text'], menu);

  Bot.sendKeyboard( keyboard , message );
  Bot.runCommand('purchase');
}else{
  back = User.getProperty('back');
  mLi.back(back.cmd, back.txt, back.keys, message);
}
