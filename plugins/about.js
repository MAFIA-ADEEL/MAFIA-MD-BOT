/*
created ᴍʀADEEL/sɪʟᴇɴᴛᴜsᴍᴀɴ 
contact 923131613251
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋𝙰𝚂𝚂𝙻𝙰𝙼 𝙾 𝙰𝙻𝙰𝙺𝚄𝙼 🌹${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ 𝙼𝙰𝙵𝙸𝙰-𝙼𝙳*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝙼𝙰𝙵𝙸𝙰-𝙰𝙳𝙴𝙴𝙻*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴍ.𝙰𝙳𝙴𝙴𝙻*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ 𝙼𝙰𝙵𝙸𝙰-𝙰𝙳𝙴𝙴𝙻*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ᴏɴᴇ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • MAFIA-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠𝙼𝙰𝙵𝙸𝙰-𝙰𝙳𝙴𝙴𝙻*
*│  ◦* *▢➠sɪʟᴇɴᴛ ᴜsᴍᴀɴ ᴊᴀɴɪ*
*│  ◦* *▢➠𝙰𝚆𝙰𝙽 𝙼𝙳*
*│  ◦* *▢➠𝙰𝙳𝙴𝙴𝙻*
*│  ◦* *▢➠𝙰𝙳𝙴𝙴𝙻 ᴢᴀᴋʜᴍɪ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝙰𝙵𝙸𝙰.𝙰𝙳𝙴𝙴𝙻
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
