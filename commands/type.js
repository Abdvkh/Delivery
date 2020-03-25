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
let back = User.getProperty('back');

let array = lang.type.but;
let exists = array.includes(message);

if (exists){
    let index = array.indexOf(message);
    let type_cmd = lang.type.commands[index];

    let type_orgs = mLi.get_orgs_by_type(type_cmd);
    let type_orgs_names = get_type_orgs_names(type_cmd);//array

    if(type_orgs.length > 0){
       let type_orgs_names_keys = mLi.mKeys(type_orgs_names);

       curOrder['organization']['type'] = type_cmd;

       mLi.bKeys('type', lang.type.text, back.keys[1]);

       Bot.sendKeyboard(type_orgs_names_keys, lang.cafe.choose);
       Bot.run({
               command: 'orgs',
               options: {type: type_cmd}
       });
    } else {
      Bot.sendMessage('No ' + message + 'exists');
      mLi.back(back.cmd, back.txt, back.keys[0], 'Назад');
   }
} else {
   mLi.back(back.cmd, back.txt, back.keys[0], message);
};
