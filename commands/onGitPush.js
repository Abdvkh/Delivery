/*CMD
  command: onGitPush
  help: 
  need_reply:
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Start code importing...");

// Bot.exportGit also possible
Bot.importGit({
  branch: "master",
  success: "onGitImportCompleted"
})