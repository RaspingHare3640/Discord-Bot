module.exports = {
    name: "moneyUP",
    description: "This is a updates money command!",
    execute(message, args) {
        const fs = require("fs");
        let doc = fs.readFileSync("./money.json")
        let code = doc.toString()
        let jsondata = JSON.parse(code) 
        
        setInterval(function () {
            for (let i = 0; i< jsondata.length; i++) {
                jsondata[i].money += 100
            }

            update(jsondata, fs)

            console.log("updated")

        }, 100000)

    }
}

function update (code, fs) {
    let toJSON = JSON.stringify(code)
    fs.writeFileSync("./money.json", toJSON)
}