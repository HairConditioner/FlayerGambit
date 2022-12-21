const viewer = require("prismarine-viewer").mineflayer

module.exports = bot => {

    bot.loadPlugin(viewer)

    bot.once("spawn", () => {

        /* Minecraft simulation */
        viewer(bot, {
    
            port: 8080,
            firstPerson: false
    
        })
    
    })

}