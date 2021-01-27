let handler = async m => m.reply(`
╭─「 Donasi • Gopay • Pulsa 」
│ • Gopay [081357302007]
│ • Telkomsel [081357302007]
╰────
╭─「 Chat Owner 」
│ > Di: Wa.me/6281357302007
╰────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler