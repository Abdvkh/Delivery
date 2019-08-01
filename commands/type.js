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
trn = lang.translations ;
array = lang.type.but;
cmd = array[0].toLowerCase();
back = User.getProperty('back');
bFunc = Bot.getProperty('backFunction');

if ( message == array[0] ){
    Bot.sendKeyboard( lang.cafe.cafes , lang.cafe.choose );
    Bot.runCommand( cmd );
} else if ( message !== array[0] ){

    Bot.sendMessage(lang.in_dev);

} else {
    bFunc(back.cmd , back.txt, back,keys);
}

