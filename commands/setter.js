/*CMD
  command: setter
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Enter orgs database item in this formate: `type|name`
  keyboard: /menu
  aliases:
CMD*/

let confs = message.split('|');

let type = confs[0];
let name = confs[1];

Bot.setProperty(name, { orgs_info: [] }, type);

Bot.sendMessage(type + ' database named ' + name + ' successfully set!');
