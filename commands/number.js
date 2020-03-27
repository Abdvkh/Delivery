/*CMD
  command: number
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let org_types = lang.type.but;

let mLi = Libs.myLib;

let user_info = User.getProperty('user_info');

let mainmenu_but = '';
let i=0;
let buts_length=lang.mainmenu_but.length;

while (i < buts_length){
    mainmenu_but += lang.mainmenu_but[i] + ',';
    if(i % 2 == 0){
        mainmenu_but += '\n';
    }
    i += 1;
}

let number = message ;

if(request['contact'] !== null){
    number = request.contact.phone_number;
}

if ( number > 998000000000 && number < 999000000000 ) {
    user_info['user_number'] = number;

    User.setProperty("user_info", user_info, "Object");

    keyboard = mLi.mKeys(org_types);

    mLi.bKeys('number', lang.number, [lang.translations.back, keyboard]);

    Bot.sendMessage(lang.success + '\n*' + number + '*');
    Bot.sendKeyboard( keyboard, lang.type.text );
    Bot.runCommand('type');
} else {
   if(message == lang.translations.mainmenu){
      mLi.back('/menu', lang.translations.mainmenu, mainmenu_but, message);
   } else {
      Bot.sendMessage(lang.error);
      Bot.sendMessage(lang.number);
      Bot.runCommand("number");
   }
}
