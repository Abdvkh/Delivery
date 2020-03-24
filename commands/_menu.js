/*CMD
  command: /menu
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: asosiy menyu, главное меню, main menu
CMD*/

let lang = Libs.Lang.get();
let tr = lang.translations;

let mainmenu_but = '';
let i=0;

while (i < lang.mainmenu_but.length){
    mainmenu_but += lang.mainmenu_but[i] + ',';
    if(i % 2 == 0){
        mainmenu_but += '\n';
    }
    i += 1;
}

Bot.sendKeyboard(mainmenu_but, tr.mainmenu);
Bot.runCommand('menu');
