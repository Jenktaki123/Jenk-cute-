module.exports.config = {
	name: "mirai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Deku",
	description: "talk to sim",
  usages: "[ask]",
	commandCategory: "...",
	cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`Wrong format\nPlease use: ${global.config.PREFIX}${this.config.name} [text]`, event.threadID, event.messageID);
const res = await axios.get(`https://api.simsimi.net/v2/?text=${query}&lc=en`);
var plaintext = res.data.success;
api.sendMessage(plaintext, event.threadID, event.messageID)
}