/*CMD
  command: /start
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: 🇷🇺Выберите язык | 🇺🇿Til tanlang
  keyboard: 🇷🇺Русский, 🇺🇿O'zbekcha
  aliases:
CMD*/

let lang = Libs.Lang.get();
let tr = lang.translations;

let user_info = {
    user_name: user.first_name,
    user_id: user.id,
    user_number: undefined,
    orders: 0
};
let opt = {
    has_things: false,
    purchases: [],
    amount: [],
    price: [],
    location: [],
    msg: undefined,
    sum: undefined,
};
let mainmenu_but = '';
let ind = 0;

User.setProperty('user_info', user_info, 'Object');
User.setProperty( 'curOrder', opt, 'Object' );


while (ind < uzLang.mainmenu_but.length || ind < ruLang.mainmenu_but.length){
    mainmenu_but += ruLang.mainmenu_but[ind] + ',';
    if(ind % 2 == 0){
        mainmenu_but += '\n';
    }
    ind += 1;
}

switch(message){
  case "🇷🇺Русский":
    Libs.Lang.user.setLang("ru");
    Bot.sendMessage(lang.hello + user.first_name + "*!");
    Bot.sendKeyboard(mainmenu_but , tr.mainmenu);
    Bot.runCommand("menu");
    break;
  case "🇺🇿O'zbekcha":
    Libs.Lang.user.setLang("uz");
    Bot.sendMessage(lang.hello + user.first_name + "*!");
    Bot.sendKeyboard(mainmenu_but , tr.mainmenu);
    Bot.runCommand("menu");
    break;
  default:
    Bot.sendMessage("This is not a language to choose. Do it again.");
    Bot.runCommand('/start');
}
