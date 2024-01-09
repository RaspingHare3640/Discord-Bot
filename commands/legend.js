// 8-15-2020


module.exports = {
    name: "legend",
    description: "The Legends",
    execute(message, args) {

        // Random HexaDecimal genertor
        let hexC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let hexA  = ["a", "b", "c", "d", "e", "f"]

        

        let color = ""

        for (let i = 0; i < 6; i++) {
            let codeN = Math.floor((Math.random() * hexC.length) + 0) 
            let codeA = Math.floor((Math.random() * hexA.length) + 0) 
            let index = Math.floor((Math.random() * 2) + 0)

            if (index == 0) {
                color = color + hexC[codeN]
            }
            else {
                color = color + hexA[codeA]
            }
             
        }

        color = "#" + color
               
        // ______________________________________

        console.log(`HexaDEcimal: ${color}`)
        const Discord = require("discord.js")

        const legends = ["Mr. Crean", "Suekyung Baker", "Billy la Bufanda", "gamerboy80", "Brahmanandam", "Bahubhali", "Donald Trump...... (jkjk imagine it being him lol", "Nithyananda ", "Master Uribe"]

        let index = Math.floor((Math.random() * legends.length) + 0)

        console.log(index)

        //#00ffcc

        let msgembed;

        if (legends[index] == "Mr. Crean") {
            msgembed = new Discord.MessageEmbed()
            .setColor(`${color} `)
            .setTitle("Piece of Pie")
            .setDescription(`The legend:  ${legends[index]}`)
            .attachFiles(["../Discord/pictures/crean.png"])
            .setImage("attachment://crean.png")
    
            message.channel.send(msgembed);
        }

        else {
            msgembed = new Discord.MessageEmbed()
            .setColor(`${color} `)
            .setTitle("Piece of Pie")
            //.setDescription(`The legend:  /*${legends[index]}, Code: ${color} `)
            .setDescription(`The legend:  ${legends[index]}`)

            message.channel.send(msgembed);
         }
        
         console.log(`Code: ${color} `)
    }
}






