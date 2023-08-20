import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption =  `
╭─[𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓]───╮
 | 
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I\'m 🐝𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓\n⬡│ I\'m up and running! 🚀
│╰────────────────────
┠───[ *BOT INFO* ]────╮
│╭────────────────────
┴│    🐝𝐁𝐔𝐌𝐁𝐋𝐄𝐁𝐄𝐄 𝐁𝐎𝐓🐝
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 🐝𝐊𝐇𝐀𝐋𝐈𝐃🐝
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/254736958034
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ *HOW TO USE* ]────⋆
┴│💡 *Some commands you can use:*
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .Ai text \n⬡│- Artificial intelligence 
│╰──────────────
╰────────═┅═───────
*Generated by*🐝𝐁𝐄𝐄 𝐁𝐎𝐓🐝
`.trim()
conn.sendMessage(m.chat, { image: { url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80055517-34f8-49c9-ad9e-9d04d2d3b846/dd71ba0-11e7f37e-1a70-4dd6-9e9e-bb6f1c8176f0.png/v1/fill/w_1024,h_576,q_80,strp/wallpaper_transformers_bumblebee_movie_by_joylockdesigner_dd71ba0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODAwNTU1MTctMzRmOC00OWM5LWFkOWUtOWQwNGQyZDNiODQ2XC9kZDcxYmEwLTExZTdmMzdlLTFhNzAtNGRkNi05ZTllLWJiNmYxYzgxNzZmMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Bo-8IU5xFnv8-GeTHy1v4bbwLCVhaRhw6ViWjgUCbaI' }, caption: caption, footer: `Follow me on instagram:\n\tinstagram.com/itx_ahmad.ali` }, { quoted: m })
  //m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
