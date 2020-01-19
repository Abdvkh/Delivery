/*CMD
  command: succeed
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let text = "This is your location:\n" + 'longitude: '+ options.location.longitude + '\nlatitude: ' + options.location.latitude

order_info = User.getProperty('curOrder');

order_info['location'].push([options.location.longitude, options.location.latitude]);

User.setProperty('curOrder', order_info, 'Object');

Bot.sendKeyboard(lang.translations.mainmenu, 'You have succed wait for the feedback from the operators');
