/*CMD
  command: profile
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let user_info = Bot.getProperty('user_info');

let msg = 'This is profile';

Bot.sendMessage(msg);
