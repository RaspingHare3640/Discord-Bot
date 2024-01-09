module.exports = {
    name: "guessing",
    description: "guessing game!",
    execute(message, args) {
        let request = require("request");
        let cheerio = require("cheerio");
        let category = require("../index.js")
        let input  = require("../index.js")
        
        let num;
        let counter = 0
    // message.channel.send("hi")
    if (counter == 0 && input[1] != "q") {
     num = randNum(input[1])
     message.channel.send("Let the Game Begin")
     console.log(num)
    }
/*
    while (true) {
        if (input[1] < num) {
            counter ++
            message.channel.send("guess higher")
        }

        else if (input[1] > num) {
            counter ++
            message.channel.send("Guess lower")
        }

        else if (input[1] == num) {
            counter ++
            message.channel.send(`CONGRATULATIONS U DID IT!! the numebr was ${num}`)
        }

        else if (input[1] == "q") {
            message.channel.send("NOOB")
            counter = 0
        }


    } */


    
    function randNum (a){
        return Math.floor(Math.random()*a)+1
    }
    

    }
    
    
    
    }