const Discord = require("discord.js");

module.exports = {
    name: "spammer",
    description: "This is a spam command, spams specified user!",
    execute(message, args) {
        //if (message.member.roles.cache.has("732773056208175104") || message.member.roles.cache.has("735647304174010489")) {
            let input = require("../index.js")
            let spam = input[1]
            let spamtxtar = []; 
            let spamtxt = ""
            let num = Number(input.length);
            let number = input[num - 1]

            // const embed = new Discord.MessageEmbed()
            //     .setColor("#0087dd")
            //     .setTitle("spammer")
            //     .addFields(
            //         {name: "NAME", value: "somethign of value"}
            //     )
            // message.channel.send(embed)

            let control = 50

            console.log(number)
            if (message.guild.id !=="594905154332131329" || message.guild.id !=="637610407565197313"){
                if (number <= control) {

                        for(let i = 2; i < num - 1; i++) {
                            spamtxtar.push(input[i]);
                            console.log(spamtxtar)
                        }

                        spamtxt = spamtxtar.join(" ");
                        console.log("text " + spamtxt)

                        for(let i = 1; i <= number; i++) {
                            setTimeout( function timer() {
                                // const spamEmbed = new Discord.MessageEmbed() 
                                //     .setColor("#0087dd")
                                //     .setTitle(`🍀 THE GREAT SPAM 🍀`)
                                //     .setDescription(` ${spam}   ${spamtxt}`)
                                //     .setTimestamp()
                                // message.channel.send(spamEmbed)
                                message.channel.send(`${spam} ${spamtxt}`)
                            //  message.channel.send(/*`${i}*/`${spam} ${spamtxt}`)
                            }, i*2250)
                        
                        }
                    
                    
                }   else {
                    message.channel.send(`Please choose a number lower than ${control}`)

                }
        }
        //}

        // else {
        //     message.channel.send("You DO NOT have PERMISSION to do this, Let me change that :) .")
        //     message.member.roles.add("732773056208175104")
        // }
        

    }
}