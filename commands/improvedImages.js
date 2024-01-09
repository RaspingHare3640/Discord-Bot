// 6-30-2022 ---
let Scraper = require("images-scraper");

const google = new Scraper ({
    puppeteer: {
        headless: true
    }
});
let running = false;

module.exports = {
    name: "improvedImages",
    description: "Random image generator Given a key word",
    async execute (message, args) {
        const fs = require("fs");


        if (!running) {
            running = true;
            try{
                const image_query = args.join(" ");
                google.scrape(image_query, 10).then(function(images_results) {
                    let index = Math.floor(Math.random() * images_results.length);
                    message.channel.send(images_results[index].url);
                    running=false;
                }).catch(function(err) {
                    running = false;
                    console.log(err);
                })
            } catch (err) {
                console.log("NO image :((((((")
            }
        } else {
            message.channel.send("CoolDown");
        }

    }
}