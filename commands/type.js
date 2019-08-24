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
cmd = array[0];

mLi.bKeys('type', lang.type.text, back.keys[1]);

if ( message == cmd ){
    Bot.sendKeyboard( lang.cafe.cafes , lang.cafe.choose );
    Bot.runCommand( cmd );
} else if ( message !== cmd ){

    Bot.sendMessage(lang.in_dev);

} else {
    mLi.back(back.cmd , back.txt, back.keys[0]);
};