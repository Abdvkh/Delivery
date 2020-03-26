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
let menu = lang.type.but;

let mLi = Libs.myLib;

let user_info = User.getProperty('user_info');

let number = message ;

if(request['contact'] !== null){
    number = request.contact.phone_number;
}

if ( number > 998000000000 && number < 999000000000 ) {
    user_info['user_number'] = number;

    User.setProperty("user_info", user_info, "Object");

    keyboard = mLi.mKeys(menu);

    mLi.bKeys('number', lang.number, [lang.translations.back, keyboard]);

    Bot.sendMessage(lang.success + '\n*' + number + '*');
    Bot.sendKeyboard( keyboard, lang.type.text );
    Bot.runCommand('type');
} else {

    mLi.back('/start', '🇷🇺Выберите язык | 🇺🇿Til tanlang', "🇷🇺Русский, 🇺🇿O'zbekcha", message);

    Bot.sendMessage(lang.error);
    Bot.sendMessage(lang.number);
    Bot.runCommand("number");
}
