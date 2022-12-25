import mineflayer from "mineflayer"
import dashboard from "mineflayer-dashboard"

import { viewerInit } from "./module/viewer.js"

function flayerInit() {
    const bot = mineflayer.createBot({
        host: "localhost",
        username: "FlayerGambit"
    })

    bot.loadPlugin(dashboard)

    moduleInit(bot)
}

function moduleInit(bot) {
    viewerInit(bot)
}

flayerInit()