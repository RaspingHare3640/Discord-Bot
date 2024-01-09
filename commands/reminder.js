// 3-27-2023

// sets Reminders
module.exports = {
    name: "reminder",
    description: "This is a reminder command!",
    execute(message, args) {
   
        const fs = require("fs");
        const input = message.content.slice(4).split("|")

        let doc = fs.readFileSync("./data/reminders.json")
        let code = doc.toString()
        let jsondata = JSON.parse(code)
        
        id = generateValidId(jsondata)
        message.channel.send(id)

        title = input[0]
        text = input[1]

        // convert time
        time = input[2].split(" ")[1].split(":")
        hours = parseInt(time[0])
        console.log(time)
        minutes = parseInt(time[1])

        meridian = input[2].split(" ")[2].toUpperCase();
        
        hours = convert(parseInt(hours), meridian.trim())

        // days
        reminderDays = []
        daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        days = input[3].split(",")
        console.log(days)
        for (let i =0; i < days.length-1; i++) {
            for (let j = 0; j < daysList.length; j++) {
                if (daysList[j].includes(days[i].trim())) {
                    reminderDays.push(j)
                }
            }
        }

        console.log(reminderDays)

        createReminder(title, text, hours, minutes, reminderDays, jsondata, fs)

        
        




    }


}


function convert (hours, meridian) {
    if (meridian == "AM") {
        if (hours == 12) {
            hours = 0
        }
        hours = (hours + 9) % 24
        }
    
    else { 
        hours  = (hours + 21) % 24
    }
    return hours;
}

function createReminder(title, text, hours, minutes, daysList, jsondata, fs) {
    id = generateValidId(jsondata)

    obj = {
        "id": id,
        "title": title,
        "text": text,
        "channels": "",
        "hours": hours,
        "minutes": minutes,
        "days": daysList


    }

    jsondata.push(obj)

    updateReminderJson(jsondata, fs)
}

function getCurrrentIds(data) {
    ids = []
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i].id)
    }

    return ids
}

function generateValidId(data) {
    id = Math.floor(Math.random()*999_999 + 100_000)
    currentIds = getCurrrentIds(data)

    if (currentIds.includes(id)) {
        return generateValidId(data)
    } else {
        return id
    }
    
}

function updateReminderJson (code, fs) {
    let toJSON = JSON.stringify(code, null, 2)
    fs.writeFileSync("./data/reminders.json", toJSON)
}