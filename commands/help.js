// 7-7-2020
module.exports = {
    name: "help",
    description: "displays all comands",
    execute(message,args) {
        const Discord = require("discord.js")
        let commands = ["-help --> Shows list of commands", "-ping --> pong!", "-youtube --> yotube link", "-ourtube --> ??", "-hi --> Greeting", "-bye --> Goodbye", "-spam *username* txt x --> Spams Person x times, x must be less than 10", "-mono --> monopoly link", "-image category --> Shows a random image of that category, category must be one word Ex: minecraftmemes", "-factor a b c --> Factors quadractic equation and gives the roots and discriminant", "-bylat --> ??", "-cyka --> ??", "-holadiez --> ??", "-cheta --> ??", "-cen word--> Encrypts word", "-cden word--> Decrypts word", "-poll channel Description ---> gives the description and asksk people to put thumbs up or  thumbs down"]
        let commdsSort = commands.sort()
        let length = commands.length
        

        let ms = new Discord.MessageEmbed()
        .setColor("#1ec94f")
        .setTitle("Help commands")
        .setDescription(`${commdsSort[0]} \n
                         ${commdsSort[1]} \n
                         ${commdsSort[2]} \n 
                         ${commdsSort[3]} \n
                         ${commdsSort[4]} \n 
                         ${commdsSort[5]} \n
                         ${commdsSort[6]} \n 
                         ${commdsSort[7]} \n
                         ${commdsSort[8]} \n 
                         ${commdsSort[9]} \n
                         ${commdsSort[10]} \n 
                         ${commdsSort[11]} \n
                         ${commdsSort[12]} \n 
                         ${commdsSort[13]} \n
                         ${commdsSort[14]} \n 
                         ${commdsSort[15]} \n
        `)
        .setFooter("please contact Raj from Rajasthan for more info!")

        message.channel.send(ms)

        
        // for(let i = 0; i < commdsSort.length; i++) {
        //    // message.channel.send(`${length} Commands`)
        //     setTimeout(function timer() {

        //         let msg = commdsSort[i]
        //     let em = new Discord.MessageEmbed()
        //     .setColor("#adaada")
        //     .setTitle("Help commands")
        //     .addField({name: `${i}`, value: `${msg}`})


        //         console.log(commdsSort[i])
        //         message.channel.send(`${em}`)
        //     }, i * 2220)
            
        // }
    }
}