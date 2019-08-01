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
keyboard = '';
opt = User.getProperty('curOrder')
opt.type = message
choice = lang[opt.code]['menu'][message];
types = Object.getOwnPropertyNames( choice );
User.setProperty('curOrder',opt,'Object');

for (var i = 0; i < types.length; i++){
    keyboard += types[i] + '\n';
};

keyboard += lang.translations.mainmenu ;

Bot.sendKeyboard( keyboard , message );
Bot.runCommand('purchase');
