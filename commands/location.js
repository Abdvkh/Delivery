/*CMD
  command: location
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

Api.sendMessage({
    chat_id: request.chat.id,
    text: "Send your location",
    reply_markup: {
                    keyboard: [
                            [{
                                text: 'Location', request_location: true
                            }]
                        ],
                    resize_keyboard: true
    }
});

Bot.runCommand('succeed');
