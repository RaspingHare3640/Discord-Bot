// 7-7-2020

// console.log(command)
module.exports = {
    name: "tubes",
    description: "Tubes for fun and secret",
    execute(message, args) {
        let command = require("../index.js");
        console.log(command)

        if (command == "youtube") {
            message.channel.send("https://youtube.com");
        } else if (command == "ourtube") {
            message.channel.send("https://www.youtube.com/watch?v=U06jlgpMtQs");
        }      

    }
}