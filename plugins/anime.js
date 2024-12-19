const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *𝙼𝙰𝙵𝙸𝙰-𝙼𝙳 ANIME PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.imghippo.com/files/RYX5040mys.jpgg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
