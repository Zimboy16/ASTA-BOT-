https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "repo") {
    const start = new Date().getTime();
    await m.React('📌');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `┏━❐
┃ ASTA MD BOT
┃ 
┗━━━━━
   ┃
  ┏
  ┃https://github.com/joeljamestech/JOEL-MD
  ┃©dave
  ┗━━━━━━━━━
┃https://whatsapp.com/channel/0029Vade9VgD38CPEnxfYF0M
┗━━━━━━━━━━━━━━━━❑`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
