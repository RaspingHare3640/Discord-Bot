const { Channel } = require("discord.js")

// 7-5-2022
module.exports = {
    name: "purge",
    description: "This is a ping command!",
    async execute(message, args) {
        console.log(`args ${args}`)
        const {size} = await message.channel.bulkDelete(parseInt(args+1), true);

        const reply = `Deleted ${size} messages.`

        // message.channel.send(reply)
    }
}