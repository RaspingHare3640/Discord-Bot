// 7-8-2020
//let doodle = input.map(Number)

//console.log(input)
module.exports = {
    name: "factor",
    description: "This is a factor command! Factors Qudractic Equations",
    execute(message, args) {
            let input = require("../index.js");
             factor(Number(input[1]), Number(input[2]), Number(input[3]), message)  
        
    }
}

function factor (a, b, c, message) {
    let x1 = ((-b + Math.sqrt((b**2)-(4*a*c))) / (2 * a))
    let x2 = ((-b - Math.sqrt((b**2)-(4*a*c))) / (2 * a))

let discriminant = (b**2)-(4*a*c)

    if (discriminant < 0) {
       return message.channel.send(`Discriminant is ${discriminant} so it will be imganinary`)

        message.channel.send(`Factored Equation (x = ${x1}) (x = ${x2})`)
    }

    if (discriminant == 0) {
        message.channel.send(`Discriminant is ${discriminant} so there is only one root which is ${x1}`)
    }

    if (discriminant > 0) {
        message.channel.send(`Discriminant is ${discriminant} so it will be all real numbers`)
    }

    message.channel.send( `Factored Equation (x = ${x1}) (x = ${x2})`);
}