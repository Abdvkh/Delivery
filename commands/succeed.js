/*CMD
  command: suceed
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

order_info = User.getProperty('curOrder');

order_info['location'].push([request.location.longitude, request.location.latitude]);

User.setProperty('curOrder', order_info, 'Object');

Bot.sendKeyboard(lang.translations.mainmenu, 'You have succed wait for the feedback from the operators');
