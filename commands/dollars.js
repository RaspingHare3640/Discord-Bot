// 7-24-2022
module.exports = {
    name: "dollars",
    description: "This is a dollars command!",
    execute(message, args) {
        try {
        // List of Dollar bills
        const dollars = [1, 5, 10, 20, 100]        

        // The initial amount
        let amount = parseFloat(args)

        // Amount being changed
        let countingAmt = amount 

        // Amount of bills needed
        let bills = [0, 0, 0, 0, 0]

        while (countingAmt != 0) {
            if (countingAmt >= dollars[4]) {
                countingAmt -= dollars[4]
                bills[4] += 1
            }
            else if (countingAmt >= dollars[3]) {
                countingAmt -= dollars[3]
                bills[3] += 1
            }
            else if (countingAmt >= dollars[2]) {
                countingAmt -= dollars[2]
                bills[2] += 1
            }
            else if (countingAmt >= dollars[1]) {
                countingAmt -= dollars[1]
                bills[1] += 1
            }
            else {
                countingAmt -= dollars[0]
                bills[0] += 1
            }
        }


        


        message.channel.send(`For $${amount} you will need:\n$100 bills: ${bills[4]}\n$20 bills: ${bills[3]}\n$10 bills: ${bills[2]}\n$5 bills: ${bills[1]}\n$1 bills: ${bills[0]}`)
    } catch (err){
        message.channel.send("Enter a real number bozo");
    }

    }
}