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

if(message in cafesMenu){
  opt.type = message;
  choice = cafesMenu[message];
  types = Object.getOwnPropertyNames(choice);
  User.setProperty('curOrder',opt,'Object');

  keyboard = mLi.mKeys(types);
  
  types = Object.getOwnPropertyNames(lang[opt.code]['menu']);
  menu = mLi.mKeys(types);

  mLi.bKeys("choice", lang[opt.code]['text'], menu);

  Bot.sendKeyboard( keyboard , message );
  Bot.runCommand('purchase');
}else{
  back = User.getProperty('back');
  mLi.back(back.cmd, back.txt, back.keys, message);
}
