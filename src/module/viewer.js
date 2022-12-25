import { mineflayer } from "prismarine-viewer"

export function viewerInit(bot) {
    bot.once("spawn", () => {
        mineflayer(bot, {
            port: 8080,
            firstPerson: true
        })
    })
}