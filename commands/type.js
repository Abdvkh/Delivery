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

let curOrder = User.getProperty('curOrder');

let array = lang.type.but;
let exists = array.includes(message);

if (exists){
    let keyboard = mLi.mKeys(lang.cafe.cafes);
    let index = array.indexOf(message);
    let type_cmd = lang.type.commands[index];

    curOrder['organization']['type'] = type_cmd;

    mLi.bKeys('type', lang.type.text, back.keys[1]);

    Bot.sendKeyboard(keyboard, lang.cafe.choose);
    Bot.run({
      command: 'orgs',
      options: {
         type: type_cmd
      }
    });
} else {
   let back = User.getProperty('back');
   mLi.back(back.cmd, back.txt, back.keys[0], message);
};
