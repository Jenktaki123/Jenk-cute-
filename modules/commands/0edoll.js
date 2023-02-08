
module.exports.config = {
	name: 'dall-e',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'Hadestia', // Made by Hadestia pls do not change my credits
	description: 'An AI image generator prompter from openAI',
	commandCategory: 'artificial intelligence',
	usages: '< prompt >',
	//aliases: [ 'imggen' ],
	cooldowns: 10,
	dependencies: {
        'openai': '',
        'fs-extra': ''
    },
    envConfig: {
    	// requiredArgument: 1
   }
}
 
module.exports.run = async function({ api, event, args, textFormat }) {
 
	const request = require('request');
	const { threadID, messageID } = event;
	const { unlinkSync, createWriteStream, createReadStream } = require('fs-extra');
 
	const { Configuration, OpenAIApi } = require('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');
	const configuration = new Configuration({ apiKey: process.env.OPENAI_API });
 
	try {
		//global.sendReaction.custom(api, event, 'ðŸŸ ');
		const openai = new OpenAIApi(configuration);
		const response = await openai.createImage({ prompt: args.join(' '), n: 1, size: '1024x1024' });
 
	    // change path nalang
		const path = `${__dirname}/../../cache/ai-generatedImages.png`;
		const data = response.data.data[0];
		const callback = () => {
			const messageBody = {
				body: args.join(' '),
				attachment: createReadStream(path)
			}
			api.sendMessage(
				messageBody,
				threadID,
				(err) => {
					unlinkSync(path);
					//if (!err) return global.sendReaction.success(api, event);
				},
				messageID
			);
		}
		return request(data.url).pipe(createWriteStream(path)).on('close', callback);
	} catch (err) {
		//global.logger(err, 'error');
		//global.sendReaction.failed(api, event);
		api.sendMessage(err, theadID, messageID);
	}
}