// 7/5/2022
module.exports = {
    name: "stocks",
    description: "This is a ping command!",
    async execute(message, args) {
        const axios = require("axios");
        const Discord = require("discord.js");

        const options = {
        method: 'GET',
        url: 'https://latest-stock-price.p.rapidapi.com/price/X-RapidAPI-Key=c8a0aea60dmshc08933fb194a1b6p10481djsn3ccbb802988f',
        params: {Indices: 'NIFTY 500'},
        headers: {
            'X-RapidAPI-Key': 'c8a0aea60dmshc08933fb194a1b6p10481djsn3ccbb802988f',
            'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
        };

        let stocks = await axios.request(options).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });

        let lookedUpStock;
        for (let i = 0 ; i < stocks.length; i ++) {
            if (stocks[i].symbol.toLowerCase() == args) {
                lookedUpStock = stocks[i];
            }
        }

        console.log(`Args: ${args}`)

        let stockEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${lookedUpStock.symbol}  ${lookedUpStock.lastUpdateTime}`)
            .setDescription(
            `
                open: ${lookedUpStock.open}
                lastPrice: ${lookedUpStock.lastPrice}
            `)

        message.channel.send(stockEmbed)
    }
}