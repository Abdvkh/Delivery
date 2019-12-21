/*CMD
  command: onGitPush
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Start code importing...
  keyboard: 
  aliases: 
CMD*/

// Bot.exportGit also possible
Bot.importGit({
  branch: "BB_Export_1564638607",
  success: "onGitImportCompleted"
})
