import mineflayer from "mineflayer"
import { viewerInit } from "./module/viewer.js"

function flayerInit() {
    const bot = mineflayer.createBot({
        host: "localhost",
        username: "FlayerGambit"
    })

    moduleInit(bot)
}

function moduleInit(bot) {
    viewerInit(bot)
}

flayerInit()