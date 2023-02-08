module.exports.config = {
  name: "otherbot2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "antibot",
  commandCategory: "haha",
  cooldowns: 5
};
module.exports.handleEvent = async ({ event, api, Users }) => {
const res = await api.getUserInfoV2(event.senderID);
var name = res.name;
const threadInfo = await api.getThreadInfo(event.threadID);
var gcname = threadInfo.threadName;
var tite = event.threadID;
let haha = event.body;
    if (haha.includes("your keyboard hero level has reached level") || haha.includes("your keyboard level has reached level") || haha.includes("Command not found") || haha.includes("The command you used") || haha.includes("Uy may lumipad") || haha.includes("Unsend this message") || haha.includes("You are unable to use bot") || haha.includes("»» NOTICE «« Update user nicknames") || haha.includes("just removed 1 Attachments") || haha.includes("message removedcontent") || haha.includes("The current preset is") || haha.includes("Here Is My Prefix") || haha.includes("just removed 1 attachment.") || haha.includes("Unable to re-add members")) {
api.sendMessage(`${name} I've detected that you’re a bot so I will leave this fucking gc to avoid spam.`, event.threadID, () => {
      setTimeout(() => {
api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
      }, 100)
    }, event.messageID)
      var deku = global.config.ADMINBOT; for(let ad of deku) { api.sendMessage(`BOT DETECTED\n\nGroup named: ${gcname}\nThread ID: ${tite}\nI’ve detected that his group is already have a bot named ${name}`, ad); }
    }
  }
module.exports.run = async ({ event, api, Threads, getText }) => {
  api.sendMessage("Automatically leave if the gc has 2 bots or more.", event.threadID, event.messageID)
}