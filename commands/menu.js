/*CMD
  command: menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: asosiy menyu, главное меню
CMD*/

lang = Libs.Lang.get();

Bot.sendKeyboard(lang.translations.mainmenu,"Please use /start command in order to restart the bot");
