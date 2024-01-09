// 1/28/2023

module.exports = {
    name: "joke",
    description: "Funny dad jokes",
    execute(message, args) {
        const axios = require("axios")
        
        // GET Request

        const getRequest = async () => {
            try {
                console.log("RUNNN")
                const response = await axios.get(`https://icanhazdadjoke.com/slack`);
                // console.log(response.attachments.text);
                // message.channel.send(response.attachments)
            } catch (err) {
                console.log(err)
                message.channel.send("Dumbass")
            }
        };

        getRequest();

    }
}