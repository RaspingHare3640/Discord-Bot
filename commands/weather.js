// 1-22-2023

module.exports = {
    name: "weather",
    description: "This is a weather command!",
    execute(message, args) {
        const axios = require("axios")
        const Discord = require("discord.js")
        let input = require("../index.js")
        const key = "ee25c4bc6b3b434f94403232232301"

        // Get Request
        const getRequest = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${input[1]}&Key=ee25c4bc6b3b434f94403232232301&days=6`);
                // console.log(response.data);
                sendMessage(response.data)
            } catch (err) {
                console.log(err)
                message.channel.send("Please enter in a valid city")
            }
        };

        // Gets the Days
        function getDays(data) {
            filteredList = []
            day_list = data.forecast.forecastday

            // Gets the High and low for erach day in nice format
            for (let i = 1; i < day_list.length; i++) {
                let str = `Low: ${day_list[i].day.mintemp_f} Max: ${day_list[i].day.maxtemp_f}`
                filteredList.push(str)
            }
            return filteredList;
        }

        function sendMessage(data) {
            days = getDays(data)
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            // Sets the Title
            .setTitle(`Weather in ${data.location.name}, ${data.location.region}, ${data.location.country}`)
            .setDescription(`The current temperature is ${data.current.temp_f} F \n and the weather status is ${data.current.condition.text}`)
            .setThumbnail(`http:${data.current.condition.icon}`)
            // .setImage(`http:${data.current.condition.icon}`)
            // Adds Fields for Forecast?
            .addFields(
            {
                name: `${convertDays(data.forecast.forecastday[1].date)}`,
                value: `${days[0]}`,
                inline: true

            },
            
            {
                name: `${convertDays(data.forecast.forecastday[2].date)}`,
                value: `${days[1]}`,
                inline: true

            },

            // {
            //     name: `${convertDays(data.forecast.forecastday[3].date)}`,
            //     value: `${days[2]}`,
            //     inline: true

            // },

            // {
            //     name: `${convertDays(data.forecast.forecastday[4].date)}`,
            //     value: `${days[3]}`,
            //     inline: true

            // },

            // {
            //     name: `${convertDays(data.forecast.forecastday[5].date)}`,
            //     value: `${days[4]}`,
            //     inline: true

            // },
            )

            .setTimestamp()
            .setFooter('Sussy Copyriight, V 1.4');

            message.channel.send(exampleEmbed);
        }

        getRequest()
    }


}


function convertDays(time){
    // 12 / 28 / 2022


    //          0         1          2           3           4          5          6
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    //Months       0  1   2   3  4  5  6   7  8  9   10 11
    let DOOOMSDAYYS = [3, 28, 14, 4, 9, 6, 11, 8, 5, 10, 7, 12]

    let dates = time.split("-")

    let temp = dates[0]
    dates.shift()
    dates.push(temp)


    let centuryCode = 0
    let century = Math.floor(parseInt(dates[2])/ 100)
    let year = parseInt(dates[2][dates[2].length-2] + dates[2][dates[2].length-1])

    // Check Leap Year

    if (year % 4 == 0){
        DOOOMSDAYYS[0] = 4
        DOOOMSDAYYS[1] = 29
    }

    // Determines Century Code
    if (century % 4 == 0){
        centuryCode = 2
    }
    else if(century % 4 == 1){
        centuryCode = 0
    }
    else if(century % 4 == 2){
        centuryCode = 5
    }
    else if(century % 4 == 3){
        centuryCode = 3
    }

    // Is getting the coefficients
    let yearDivCoef = Math.floor(parseInt((year / 12)))
    let yearRemCoef = year % 12

    let twoCoef = Math.floor(parseInt((yearRemCoef / 4)))

    // console.log(`CC: ${centuryCode}`)
    // console.log(`YD: ${yearDivCoef}`)
    // console.log(`YR: ${yearRemCoef}`)
    // console.log(`TC: ${twoCoef}`)

    // Adds the coeffs to find the Doomsday
    let totalCoefs = centuryCode + yearDivCoef + yearRemCoef + twoCoef
    // console.log(totalCoefs)

    // Algortihims to find Doomsday
    let DoomsDayIndex = 0
    if (totalCoefs > 6){
        DoomsDayIndex = totalCoefs % 7
    }
    else {
        DoomsDayIndex = totalCoefs
    }

    // Gets the MonthsDoomsDate
    let monthDoomsDate = DOOOMSDAYYS[parseInt(dates[0]) - 1]
    // console.log(DoomsDayIndex)

    // difference between the doomsday and the actual date
    let DifferenceDayIndex = (Math.abs(monthDoomsDate - parseInt(dates[1])) % 7)

    //  console.log(DifferenceDayIndex)

    let FinalDayIndex = 0

    // Algorithim to find the Actual day
        // Checks if doomsday is less than the date
    if (monthDoomsDate - parseInt(dates[1]) < 0){
        if (totalCoefs + DifferenceDayIndex > 6){
            FinalDayIndex = (totalCoefs + DifferenceDayIndex) % 7
        } else {
            FinalDayIndex = totalCoefs + DifferenceDayIndex
        }
    }
    // Checks if dooomsday is greater than the date
    else{
        if (totalCoefs - DifferenceDayIndex < 0){
            FinalDayIndex = (totalCoefs - DifferenceDayIndex) % 7
        } else {
            FinalDayIndex = (totalCoefs - DifferenceDayIndex) % 7
        }
    }
    console.log(FinalDayIndex)

    // Prints the Day
    return days[FinalDayIndex]
}