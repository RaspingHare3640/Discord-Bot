let cond ;
module.exports = {
    name: "numbers",
    description: "numbers...",
     async execute(message, args) {
        const Discord = require("discord.js");
        const client = new Discord.Client();
        const input = require("../index.js")
       // const channel = message.channel.id
        let counter = 0
        let num = Random(parseInt(input[1]))
        console.log(num)
        console.log(input[1])
        

       
       while (true) {
        await message.channel.send(`Guess a number between 1 - ${input[1]}... (5 seconds)`)
           let cond = await  listen(message, input[1], 5000)
        
           if (  cond == "q") {
               message.channel.send("broken")
               break
           } 

           else if (parseInt(cond) == num) {
            message.channel.send("CONGRATS U GOT IT")
            break
           }
                if ( parseInt(cond) <= num ) {
               message.channel.send("higher")
            }
            else if (parseInt(cond) >= num) {
                message.channel.send("lower")
                console.log(cond)
            }

            else if (cond == undefined) {
                message.channel.send("you failed")
                break
            }

               


           
        //    catch (err) {
        //        message.channel.send("please pass in a numebr")
        //    }
        }

           ///console.log("nub")
       }

   
        
    }


function Random (num) {
   return Math.floor(Math.random() * num) + 1;
}

async function listen (message, n, t) {
    ///console.log("hi")
   
        const msgs = await message.channel.awaitMessages(msg => msg.content, {time:t})
        let contentss = msgs.map(msg => msg.content)//.join(", ")

       

        //message.channel.send(` ${/*msgs.map(msg => msg.content).join(", ")*/ contentss[0]}`);
       // cond = contentss[1]
        return contentss[0]
}