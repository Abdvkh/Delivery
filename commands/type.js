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

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let back = User.getProperty('back');

let array = lang.type.but;
let exists = array.includes(message);

if (exists){
    let keyboard = mLi.mKeys(lang.cafe.cafes);
    let index = array.indexOf(message);
    let type_cmd = lang.type.commands[index];

    mLi.bKeys('type', lang.type.text, back.keys[1]);

    Bot.sendKeyboard(keyboard, lang.cafe.choose);
    Bot.runCommand(type_cmd);
} else if (message == array[1] || message == array[2]){
    Bot.sendMessage(lang.in_dev);
    Bot.runCommand("menu");
} else {
    mLi.back(back.cmd, back.txt, back.keys[0], message);
};
