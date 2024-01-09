const tossups = "🇹"
const powers = "🅿️"




module.exports = {
    name: "reactions",
    description: "This is a poll command! Creates a basic poll",
    async execute(message, args) {

      

        let input = require("../index.js")
        let Discord = require("discord.js")

        let scoreEmbed = new Discord.MessageEmbed()
            .setColor("#a9ca44")
            .setTitle("Quizbowl")
        message.channel.send(scoreEmbed).then((MEmbed) => {
            MEmbed.react("👍");
            MEmbed.react("👎");
        }).then((reaction) => {
            console.log(reaction)
        });

    }
}