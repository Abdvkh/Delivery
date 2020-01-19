/*CMD
  command: location
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

Api.sendMessage({
    chat_id: request.chat.id,
    text: "Send your location",
    reply_markup: { ReplyKeyboardMarkup: [['Location', request_location: true]] }
});
