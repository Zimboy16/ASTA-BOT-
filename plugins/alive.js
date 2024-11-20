const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `sup ${pushname} ASTA BOT IS ONLINE 

| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB
| *Owner*: dave

I am Malvin md whatsapp bot. How can I help you.
To get the menu, type as menu. If you need to know something about the bot,
type as owner and direct the question to me. Good day.

 ©dave`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
