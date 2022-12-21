const dashboard = require("mineflayer-dashboard")

module.exports = bot => bot.loadPlugin(dashboard({ chatPattern: /^» \w+? » / }))