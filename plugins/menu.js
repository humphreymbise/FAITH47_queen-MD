const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 *Owner :* ${config.OWNER_NAME}
┃◈┃• ⚙️ *Prefix :* [${config.PREFIX}]
┃◈┃• 🌐 *Platform :* vercel
┃◈┃• 📦 *Version :* 5.0.0 Pro
┃◈┃• ⏱️ *Runtime :* ${runtime(process.uptime())}
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 💖 menu ❤️* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• ❣️ menu
┃◈┃• ❣️ ping
┃◈┃• ❣️ test
┃◈┃• ❣️ alive
┃◈┃• ❣️ owner
┃◈┃• ❣️ play
┃◈┃• ❣️ videos
┃◈┃• ❣️ define
┃◈┃• ❣️ channel
┃◈┃• ❣️ repo
┃◈┃• ❣️ antilink
┃◈┃• ❣️ vcf
┃◈┃• ❣️ save
┃◈┃• ❣️ update
┃◈┃• ❣️ support
┃◈┃• ❣️ fancy
┃◈┃• ❣️ bible
┃◈┃• ❣️ quran
┃◈┃• ❣️ bug
┃◈┃• ❣️ info
┃◈┃• ❣️ logo
┃◈┃• ❣️ gpt
┃◈┃• ❣️ profile
┃◈┃• ❣️ antilink
┃◈┃• ❣️ game
┃◈┃• ❣️ pdf
┃◈┃• ❣️ hack
┃◈┃• ❣️ faith
┃◈┃• ❣️ zeze
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                img { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/q8hps6.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/humphreymbise/queen_faith47-md-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
