const pvp = require("mineflayer-pvp").plugin
const { pathfinder } = require("mineflayer-pathfinder")
const armourManager = require("mineflayer-armor-manager")

module.exports = bot => {

    bot.loadPlugin(pvp)
    bot.loadPlugin(pathfinder)
    bot.loadPlugin(armourManager)


    bot.on("playerCollect", (collector, itemDrop) => {

        if (collector !== bot.entity) return
    
        setTimeout(() => {
    
            const sword = bot.inventory.items().find(item => item.name.includes("sword"))
    
            if (sword) bot.equip(sword, "hand")
    
        }, 150)
    
    })
    
    // FlayerGambit camera movements
    bot.on("physicTick", () => {
    
        if (bot.pvp.target) return
        if (bot.pathfinder.isMoving()) return
    
        const entity = bot.nearestEntity()
    
        if (entity) bot.lookAt(entity.position.offset(0, entity.height, 0))
    
    })
    
    // FlayerGambit combat movements
    bot.on("physicTick", () => {
        
        const flags = event => 
            event.type === "mob" && 
            event.position.distanceTo(bot.entity.position) < 16 && 
            event.mobType !== "Armor Stand"
        
        const entity = bot.nearestEntity(flags)
    
        if (entity) bot.pvp.attack(entity)
    
    })

}