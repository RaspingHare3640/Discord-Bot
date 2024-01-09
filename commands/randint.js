let num =  Math.floor((Math.random() * 100) + 1)


function newrand () {
    num = Math.floor((Math.random() * 100) + 1)
    console.log(num)

}

console.log(num)
module.exports = {
    name: "randint",
    description: "This is a guessign game!!!",
    execute(message, args) {
       // message.channel.send("hello wrod")

        const Discord = require("discord.js")
        let command = require("../index.js");
        let input = require("../index.js");

        // let em = new Discord.MessageEmbed()
        // .setColor("#0087dd")
        // .setTitle("Guessing Game")
        // .setDescription("Guess a number between 1 and 100")

        // message.channel.send(em)
        let inp = input[1]
        console.log(input[1])

        
       
            if (inp < num) {
                message.channel.send("Higher, Try Again")
            }

            else if (inp > num ) {
                message.channel.send("Lower, Try Again")
            }

            else if (inp == num) {
                message.channel.send("Congrtualation, U DID IT!!!")
            }

            else if (inp == "q") {
            } 

            else if (inp == "ng") {
                newrand()
            }
        }

    
}

