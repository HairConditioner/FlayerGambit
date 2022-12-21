const pvp = require("mineflayer-pvp").plugin

module.exports = bot => {

    bot.loadPlugin(pvp)

    bot.on("chat", (username, msg) => {

        switch(msg) {
    
            // Movement
            case "forward": {
    
                bot.setControlState("back", false)
                bot.setControlState("forward", true)
                break
    
            }
            case "back": {
    
                bot.setControlState("forward", false)
                bot.setControlState("back", true)
                break
    
            }
            case "left": {
    
                bot.setControlState("left", false)
                bot.setControlState("right", true)
                break
    
            }
            case "right": {
    
                bot.setControlState("right", false)
                bot.setControlState("left", true)
                break
    
            }
            case "sprint": {
    
                bot.setControlState("sneak", false)
                bot.setControlState("sprint", true)
                break
    
            }
            case "sneak": {
    
                bot.setControlState("sprint", false)
                bot.setControlState("sneak", true)
                break
    
            }
            case "jump": {
    
                bot.setControlState("jump", true)
                break
    
            }
            case "stop": {
    
                bot.clearControlStates()
                break
    
            }
            // PvP
            case "fight": {
    
                const player = bot.players[username]
    
                if (!player) {
    
                    bot.chat(`FlayerGambit can't see ${username}`)
                    return
    
                }
    
                bot.chat(`FlayerGambit is now fighting ${username}`)
                bot.pvp.attack(player.entity)
    
            }
    
        }
    
    })

}