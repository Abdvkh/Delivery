/*CMD
  command: menu
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: asosiy menyu, главное меню, main menu
CMD*/

lang = Libs.Lang.get();
tr = lang.translations;

cur_order = User.getProperty('curOrder');

basket_keys = tr.clean + ',' + lang.order + '\n,' + tr.mainmenu ;
basket_msg = lang.basketlist + cur_order.msg;

mainmenu_but = '';

while (i < lang.mainmenu_but.length){
    mainmenu_but += lang.mainmenu_but[i] + ',';
    if(i % 2 == 0){
        mainmenu_but += '\n';
    }
}

switch (message) {
    case lang.mainmenu_but[0]:
        Bot.sendKeyboard( tr.mainmenu , lang.number );
        Bot.runCommand('number');
        break;
    case lang.mainmenu_but[1]:
        if (cur_order){
            Bot.sendKeyboard(basket_keys, lang.basketlist);
            Bot.runCommand('basket');
            break;
        }
    case lang.mainmenu_but[2]:
        Bot.runCommand('profile');
        break;
    case lang.mainmenu_but[3]:
        Bot.runCommand('/help');
        break;
    case lang.mainmenu_but[4]:
        Bot.sendKeyboard(tr.lang + ',' + tr.mainmenu, lang.mainmenu_but[4])
        Bot.runCommand('settings');
        break;
    case lang.mainmenu_but[5]:
        Bot.runCommand('statistics');
        break;
    default:
        Bot.sendMessage('Sorry, something went wrong!')
        Bot.sendKeyboard(mainmenu_but , tr.mainmenu);
        Bot.runCommand('menu');
}
