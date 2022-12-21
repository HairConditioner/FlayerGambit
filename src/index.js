const mineflayer = require("mineflayer")
const path = require("path")
const fs = require("fs")

function init() {

    const bot = mineflayer.createBot({

        host: "localhost",
        username: "FlayerGambit",
    
    })

    registerInternalModules(bot)

    bot.on("end", init)

}

function registerInternalModules(bot) {

    const modulesDir = path.join(__dirname, "module")
    const modules = fs.readdirSync(modulesDir).filter(x => x.endsWith(".js")).map(pluginName => require(path.join(modulesDir, pluginName)))

    bot.loadPlugins(modules)

}

init()