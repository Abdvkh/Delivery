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
lang = Libs.Lang.get();
mLi = Libs.myLib;
opt = User.getProperty('curOrder');
cafesMenu = lang[opt.code]['menu']; 

if(cafesMenu[message] != "undefined"){
  opt.type = message;
  choice = cafesMenu[message];
  types = Object.getOwnPropertyNames(choice);
  User.setProperty('curOrder',opt,'Object');

  keyboard = mLi.mKeys(types);

  Bot.sendKeyboard( keyboard , message );
  Bot.runCommand('purchase');
} else {
  back = User.getProperty('back');
  keys = back.keys.split(",");
  mLi.back(back.cmd, back.txt, keys, message);
}

