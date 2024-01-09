// Revived on 2/19/2023

const cards = ["A", "2", "3", "4","5", "6", "7", "8", "9", "J", "Q", "K" ] 
const suits = ["♣️","🔷","❤️","♠️"]

let card1 = 0
let card2 = 0
let card3 = 0
let card4 = 0
let card5 = 0

let Acenumber;

let data = {counter: 0, iterator : 0}

let botCard1 = 0
let botCard2 = 0
let botCard3 = 0

module.exports = {
    name: "blackJack",
    description: "Play Black Jack",
   async execute(message, args) {
       
        const input = require("../index.js")
       const Discord = require("discord.js")

        card1 = randomCardGenrator(cards, suits)
        card2 =  randomCardGenrator(cards, suits)

        botCard1 = randomCardGenrator(cards, suits)
        botCard2 = randomCardGenrator(cards, suits)


       let userEmbed = new Discord.MessageEmbed()
        .setColor("#0087dd")
        .setTitle("BLACKJACK")
        .addFields(
        {name: `User`, value: `${card1} ${card2}`},
        {name: `Bot`, value: `${botCard1} |?|`})
        .setDescription("Hit or show (h or s) you have 7 sceonds")
    message.channel.send(userEmbed)

    while (data.counter == 0) {
        let opt = await listen(message)

        if (opt == "q") {
            message.channel.send("BROKENN!")
            data.counter++
        } else if (opt == "h") {
            console.log("Asfd")
            Hit(Discord, message)
            
        } else if (opt == "s") {
            Show(Discord, message)
        }
    }



    reset()
    }
   
}


function randomCardGenrator(card, suits) {
    let RNC = Math.floor((Math.random() * card.length))
    let RS = Math.floor((Math.random() * suits.length))

    return `${card[RNC]} ${suits[RS]}`
           
}

async function listen (message) {
    ///console.log("hi")
   
        const msgs = await message.channel.awaitMessages(msg => msg.content, {time:7000})
        let contentss = msgs.map(msg => msg.content)//.join(", ")

       

        //message.channel.send(` ${/*msgs.map(msg => msg.content).join(", ")*/ contentss[0]}`);
       // cond = contentss[1]
       console.log(contentss)
        return contentss[0]
}

function Hit(Discord, message) {
    data.iterator += 1
    
    if (data.iterator == 1){
     card3 = randomCardGenrator(cards, suits)
    
    
    
     if (Sum(card1, card2, card3) > 21) {
        let FailureEmbed = new Discord.MessageEmbed()
        .setColor("#0087dd")
        .setTitle("You are Bust")
        .addFields(
        {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
        {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
        .setDescription("You can play again by using the `-blj` command")
            data.counter++
        message.channel.send(FailureEmbed)
       
            
     } else if (Sum(card1, card2, card3) == 21) {
        let SuccessEmbed = new Discord.MessageEmbed()
        .setColor("#0087dd")
        .setTitle("You WON!!")
        .addFields(
        {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
        {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
        data.counter++
        

        message.channel.send(SuccessEmbed)

      
     }
        else if (Sum(card1, card2, card3) < 21){
        let NeutralEmbed = new Discord.MessageEmbed()
        .setColor("#0087dd")
        .setTitle("BLACKJACK")
        .addFields(
        {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
        {name: `Bot`, value: `${botCard1} |?|`})
        .setDescription("hit or show (h,s) you have 7 seconds")

        message.channel.send(NeutralEmbed)
     }

    }
    if (data.iterator == 2) {
        card4 = randomCardGenrator(cards,suits)
        if (Sum(card1, card2, card3, card4) > 21) {
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You are Bust")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
                data.counter++
            message.channel.send(FailureEmbed)

            
                
         } else if (Sum(card1, card2, card3,card4) == 21) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4}Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            
    
            message.channel.send(SuccessEmbed)

     
         }
            else if (Sum(card1, card2, card3,card4) < 21){
            let NeutralEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("BLACKJACK")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} |?|`})
            .setDescription("hit or show (h,s) you have 7 seconds")
    
            message.channel.send(NeutralEmbed)
         }
    }
    if (data.iterator == 3) {
        card5 = randomCardGenrator(cards,suits)
        if (Sum(card1, card2, card3, card4, card5) > 21) {
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You are Bust")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5} Total: ${Sum(card1, card2, card3, card4, card5)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
                data.counter++
            message.channel.send(FailureEmbed)
          
                
         } else if (Sum(card1, card2, card3,card4, card5) == 21) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5} Total: ${Sum(card1, card2, card3, card4, card5)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            
    
            message.channel.send(SuccessEmbed)
            
         }
            else if (Sum(card1, card2, card3,card4,card5) < 21){
            let NeutralEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("BLACKJACK")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5}Total: ${Sum(card1, card2, card3, card4,card5)}`},
            {name: `Bot`, value: `${botCard1} |?|`})
            .setDescription("hit or show (h,s) you have 7 seconds")
    
            message.channel.send(NeutralEmbed)
         }
    }


     
}

function Show (Discord, message) {
    if (data.iterator == 0){
        if (Sum(card1,card2) < Sum(botCard1, botCard2)){
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You LOST")
            .addFields(
            {name: `User`, value: `${card1} ${card2}  Total: ${Sum(card1, card2)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(FailureEmbed)
        }

        else if (Sum(card1,card2) == Sum(botCard1,botCard2)) {
            let TieEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("ITS A TIE")
            .addFields(
            {name: `User`, value: `${card1} ${card2}  Total: ${Sum(card1, card2)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(TieEmbed)
        }
        else if (Sum(card1,card2) > Sum(botCard1,botCard2)) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} Total: ${Sum(card1, card2)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            

            message.channel.send(SuccessEmbed)
        }
    }

    else if (data.iterator == 1){
        if (Sum(card1,card2,card3) < Sum(botCard1, botCard2)){
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You LOST")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(FailureEmbed)
        }

        else if (Sum(card1,card2,card3) == Sum(botCard1,botCard2)) {
            let TieEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("ITS A TIE")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(TieEmbed)
        }
        else if (Sum(card1,card2,card3) > Sum(botCard1,botCard2)) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} Total: ${Sum(card1, card2, card3)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            

            message.channel.send(SuccessEmbed)
        }
    }
    else if (data.iterator == 2){
        if (Sum(card1,card2,card3,card4) < Sum(botCard1, botCard2)){
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You LOST")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4}  Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(FailureEmbed)
        }

        else if (Sum(card1,card2,card3,card4) == Sum(botCard1,botCard2)) {
            let TieEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("ITS A TIE")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4}  Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(TieEmbed)
        }
        else if (Sum(card1,card2,card3,card4) > Sum(botCard1,botCard2)) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} Total: ${Sum(card1, card2, card3, card4)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            

            message.channel.send(SuccessEmbed)
        }
    }
    else if (data.iterator == 3){
        if (Sum(card1,card2,card3,card4,card5) < Sum(botCard1, botCard2)){
            let FailureEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You LOST")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5} Total: ${Sum(card1, card2, card3, card4, card5)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(FailureEmbed)
        }

        else if (Sum(card1,card2,card3,card4,card5) == Sum(botCard1,botCard2)) {
            let TieEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("ITS A TIE")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5} Total: ${Sum(card1, card2, card3, card4, card5)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            .setDescription("You can play again by using the `-blj` command")
            data.counter++
            message.channel.send(TieEmbed)
        }
        else if (Sum(card1,card2,card3,card4,card5) > Sum(botCard1,botCard2)) {
            let SuccessEmbed = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("You WON!!")
            .addFields(
            {name: `User`, value: `${card1} ${card2} ${card3} ${card4} ${card5} Total: ${Sum(card1, card2, card3, card4, card5)}`},
            {name: `Bot`, value: `${botCard1} ${botCard2} Total: ${Sum(botCard1, botCard2)}`})
            data.counter++
            

            message.channel.send(SuccessEmbed)
        }
    }
}

function Sum(a,b=0,c=0,d=0,e=0){
    let crd1 = a[0]
    let crd2;
    let crd3 = 0
    let crd4 = 0
    let crd5 = 0

    if (b != 0) {
        crd2 = b[0]
        
    }
    if (c != 0) {
        crd3 = c[0]
        
    }
    if (d != 0) {
        crd4 = d[0]
        
    }if (e != 0) {
        crd5 = e[0]
        
    }

    

    return numify(crd1) + numify(crd2) + numify(crd3) + numify(crd4) + numify(crd5)

}

function numify(a){
    let num;
    if (a == "J" || a == "Q" || a == "K") {
         num = 10
    }
   else if (a == "A") {
        ifAce(a)
    }

    else if (a != "A" && a != "J" && a != "Q" && a != "K") {
         num = parseInt(a)
    }

    return num
}

function ifAce() {
    if(numify(card1) + 11 <= 21 || numify(card1) + numify(card2) + 11|| numify(card1) + numify(card2) + numify(card3) + 11 <= 21){
        return 11
    } else {
        return 1
    }
}

function reset() {
    data.counter = 0
    data.iterator = 0
}

function botHit(a,b) {
    botCard3 = randomCardGenrator(cards, suits)

}