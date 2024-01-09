module.exports = {
    name: "money",
    description: "This is a money command!",
    execute(message, args) {
        const fs = require("fs");
        const input = require("../index.js")
        let money = []  

        let doc = fs.readFileSync("./money.json")
        let code = doc.toString()
        let jsondata = JSON.parse(code)

        let doc2 = fs.readFileSync("./guilds.json")
        let code2 = doc2.toString()
        let guildData = JSON.parse(code2) 


        


       

        if (input[1] == "sign") {

            let check = 0
            for (let i = 0; i < jsondata.length; i++) {
                if (jsondata[i].id == message.author.id){
                    check = 1
                }
            }

            if (check == 0) {
                let obj = {
                    "user": message.author.username,
                    "id": message.author.id,
                    "tag": `<@!${message.author.id}>`,
                    "money": 500,
                    "guilds":[],
                    "guildOwner": false,
                }

                jsondata.push(obj)

                update(jsondata, "./money.json", fs)


                message.channel.send("Congratulations You have Signed up, you have 500 Safens")
            }
        }

        else if (input[1] == "balance" || input[1] == "bal") {
            for (let i = 0; i < jsondata.length; i++) {
                if (jsondata[i].id == message.author.id) {
                    let moola = jsondata[i].money
                    message.channel.send(`<@!${message.author.id}> your toal Money is: ${moola} Safens` )
                }
            }

        

        }

        else if (input[1] == "create" || input[2] == "guild") {

            let person = personFinder(jsondata, message.author.id)
            let checker = 0
            for (let i = 0; i < guildData.length; i++) {
                if (person.name == guildData[i].guildOwner) {
                    checker ++
                    message.channel.send("you can't hav emore than one guild")
                }
                else if (input[3] == guildData[i].guildName) {
                    checker ++

                    message.channel.send("Stop trying to cheat the system")
                }
            }
                console.log(person.money)
                if (person.money <= 400) {
                    checker ++
                }
            if (person.money >= 400 || checker == 0) {
                
                 
                let guild = {
                    "guildName": input[3],
                    "guildMembers": [],
                    "guildOwner": message.author.username,
                    "guildMoney": 0,
                    "waitList": []

                }
                guildData.push(guild)
                fine(400, message.author.id, jsondata, fs)
                person.guildOwner = true
                person.guilds.push(input[3])


                update(guildData, "./guilds.json", fs)

                update(jsondata, "./money.json", fs)


                

                message.channel.send(`Congratulation You have Just created ${input[3]} guild`)

            } else if (person.money <= 400 ) {
                message.channel.send(`You need atleast 400 Safens to make a guild`)
            }
           
           

        }

        else if (input[1] == "apply" && input[2] != undefined) {
            let person = personFinder (jsondata, message.author.id)
            if (person.guildOwner == false) {
                let g = guildFinder(guildData, input[2])

                console.log(g)
                g.waitList.push(message.author.username)
                update(guildData, "./guilds.json", fs)
            }
            else {
                message.channel.send("you are a guild owner, stop it")
            }
        }

        else if (input[1] == "accept" && input[2] != undefined) {
            let person = personFinder(jsondata, message.author.id) 
            let guild = guildFinder(guildData, message.author.username)
            let pName = input.slice(2).join(" ")
            
            if (person.guildOwner == true) {
                console.log(pName)
                let index = guild.waitList.indexOf(pName)
                console.log(index)
                for (let i = 0; i < guild.waitList.length; i++) {
                    if (guild.waitList[i].toLowerCase() == input[2]) {
                        guild.guildMembers.push(input[2])
                        guild.waitList.splice(index, 1)

                        update(guildData, "./guilds.json", fs)

                        

                        message.channel.send(`${input[2]} Has been accepted into the ${guild.guildName} guild`)
                    }
                }

                for (let i = 0; i < jsondata.length; i++) {
                    if(jsondata[i].user.toLowerCase() == pName ) {
                        jsondata[i].guilds.push(guild.guildName)
                    }
                }

            }
            else {
                message.channel.send("You are not a Guild Owner")
            }
        }

        else if (input[1] == "display") {
            let person = personFinder(jsondata, message.author.id)
            let guild = guildFinder (guildData, message.author.username)
            if (person.guildOwner == true) {
                for (let i = 0; i < guild.waitList.length; i++){
                    message.channel.send(guild.waitList[i])
                }
            }
            else {
                message.channel.send("You are not a Guild Owner")
            }
        }

        

    

    
}
}

function fine (am, id, jsondata, fs) {
    for (let i = 0; i< jsondata.length; i++) {
        if (jsondata[i].id == id) {
             jsondata[i].money = jsondata[i].money - am
            updateJson(jsondata, fs)
        }
    }

    
}

function personFinder (jsondata, id) {
    for (let i = 0; i< jsondata.length; i++) {
        if (jsondata[i].id == id) {
            return jsondata[i]
        }
    }

}

function guildChecker () {

}

function guildFinder (data, Gname) {
    for (let i = 0; i< data.length; i++) {
        if (data[i].guildName == Gname) {
            return data[i]
        }
        else if (data[i].guildOwner == Gname) {
            return data[i]
        }
    }
}



function update (code, path,fs) {
    let toJSON = JSON.stringify(code, null, 2)
    fs.writeFileSync(path, toJSON)
}

function updateMoneyJson (code, fs) {
    let toJSON = JSON.stringify(code, null, 2)
    fs.writeFileSync("./money.json", toJSON)
}