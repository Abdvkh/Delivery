/*CMD
  command: type
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

lang = Libs.Lang.get();
mLi = Libs.myLib;
back = User.getProperty('back');

array = lang.type.but;
exists = array.includes(message);

if (exists && message == array[0]){
    keyboard = mLi.mKeys(lang.cafe.cafes);
    Bot.sendKeyboard( keyboard , lang.cafe.choose );
    mLi.bKeys('type', lang.type.text, back.keys[1]);
    Bot.runCommand('kafedan');
} else if (message == array[1] || message == array[2]){
    Bot.sendMessage(lang.in_dev);
    Bot.runCommand("menu");
} else {
    mLi.back(back.cmd , back.txt, back.keys[0], message);
};
