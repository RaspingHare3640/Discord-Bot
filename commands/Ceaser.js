// 7-13-2020

module.exports = {
    name: "cen",
    description: "This is a ceaser command! ciphers message",
    execute(message, args) {
            let input = require("../index.js");
            let command = require("../index.js");
        console.log(command)
        console.log(input.join(" "))
            if (command[0] == "cen") {
                
                message.channel.send(encrypt(input.slice(1).join(" ")));
            }

            else if (command[0] == "cden") {
                message.channel.send(decrypt(input.slice(1).join(" ")));
            }
        
    }
}

// 11-3-2021

// List of Alphabet
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// gets the button id and sets up an event listener
// let Ebutton = document.getElementById("ebt");
// let Dbutton = document.getElementById("dbt");
// let eOutput = document.getElementById("eOutput");
// let dOutput = document.getElementById("dOutput");
// let eString;
// let dString;


// encrypts the string +3
function encrypt(val) {
    let encryptedString = "";
    let list = val.toLowerCase().split("");
    for (let i = 0; i < list.length; i++) {
        if (list[i] != " ") {
        encryptedString += alphabet[upAlpha(list[i])];
        } else {
            encryptedString += " "
        } 
    }

    return encryptedString
}

function decrypt(val) {
    let decryptedString = "";
    let list = val.toLowerCase().split("");
    for (let i = 0; i < list.length; i++) {
        if (list[i] != " ") {
            decryptedString += alphabet[downAlpha(list[i])];
            } else {
                decryptedString += " "
            } 
    }

    return  decryptedString
}

// ups indexes +3
function upAlpha(val) {
    let index;
    for(let i = 0; i < alphabet.length; i++) {
        if (val == alphabet[i]) {
            index = i+3
            if (index > 25) {
                return index-26
            } else {
                return index
            }
        }
    }
}

// downs index -3

function downAlpha(val) {
    let index;
    for(let i = 0; i < alphabet.length; i++) {
        if (val == alphabet[i]) {
            index = i-3
            if (index < 0) {
                return index+26
            } else {
                return index
            }
        }
    }
}

//---------------------------------------------------

// OLD Code verryyy old, revised 11-3-2021

// function Encrypt(c) {

//     let encryption;

//     //console.log("Original value is: " + c);

//      if (c == 'A') {
//         encryption = "D"
//     } else if (c == 'B') {
//         encryption = "E"
//     } else if (c == 'C') {
//         encryption = "F"
//     } else if (c == 'D') {
//         encryption = "G"
//     } else if (c == 'E') {
//         encryption = "H"
//     } else if (c == 'F') {
//         encryption = "I"
//     } else if (c == 'G') {
//         encryption = "J"
//     } else if (c == 'H') {
//         encryption = "K"
//     } else if (c == 'I') {
//         encryption = "L"
//     } else if (c == 'J') {
//         encryption = "M"
//     } else if (c == 'K') {
//         encryption = "N"
//     } else if (c == 'L') {
//         encryption = "O"
//     } else if (c == 'M') {
//         encryption = "P"
//     } else if (c == 'N') {
//         encryption = "Q"
//     } else if (c == 'O') {
//         encryption = "R"
//     } else if (c == 'P') {
//         encryption = "S"
//     } else if (c == 'Q') {
//         encryption = "T"
//     } else if (c == 'R') {
//         encryption = "U"
//     } else if (c == 'S') {
//         encryption = "V"
//     } else if (c == 'T') {
//         encryption = "W"
//     } else if (c == 'U') {
//         encryption = "X"
//     } else if (c == 'V') {
//         encryption = "Y"
//     } else if (c == 'W') {
//         encryption = "Z"
//     } else if (c == 'X') {
//         encryption = "A"
//     } else if (c == 'Y') {
//         encryption = "B"
//     } else if (c == 'Z') {
//         encryption = "C"
//     } else if (c == "|") {
//         encryption == "-"
//     }else if (c == ' ') {
//         encryption = " "
//     } else if (c == ',') {
//         encryption = ", "
//     } else if (c == '.') {
//         encryption = ". "
//     } else if (c == '?') {
//         encryption = "? "
//     } else if (c == '!') {
//         encryption = "! "
//     }else if (c == "'") {
//         encryption = "' "
//     } else if (c == "0") {
//         encryption = "3"
//     } else if (c == "1") {
//         encryption = "4"
//     } else if (c == "2") {
//         encryption = "5"
//     } else if (c == "3") {
//         encryption = "6"
//     } else if (c == "4") {
//         encryption = "7"
//     } else if (c == "5") {
//         encryption = "8"
//     } else if (c == "6") {
//         encryption = "9"
//     } else if (c == "7") {
//         encryption = "0"
//     } else if (c == "8") {
//         encryption = "1"
//     } else if (c == "9") {
//         encryption = "2"
//     } 

//     //console.log("Encrypted Value is: " + encryption);
//     // message.channel.send(encryption);
//     return encryption
// }

// function encryptSentence(txt, message) {
//     // let st = document.getElementById("Statement");
//     // let statement = st.value;
//     let st = txt
//     let Statement = [];
//    // console.log("The Statement is: " + Statement);
//     let EncryptedString = ""
//     for(let i = 1; i < st.length; i++) {
//         Statement.push(st[i].toUpperCase());
//         console.log(st[i])
//     }
//     console.log(Statement)
//     for (i = 0; i < Statement.length; i++) {
//          let string = Statement[i]
//          console.log("string:   " + string)
//          for(let j = 0; j < string.length; j++) {
//            let str =  Encrypt(string[j], message);
//              console.log(string[j])
//             EncryptedString = EncryptedString + str;
//          }
        
//     }
//     message.channel.send(EncryptedString);
//     // let output = document.getElementById("EncryptSt").innerHTML = EncryptedString;
//     // console.log("The Encryption is: " + EncryptedString);



// }

// function Decrypt(c) {
//     let decryption;

//     if (c == 'D') {
//         decryption = "A"
//     } else if (c == 'E') {
//         decryption = "B"
//     } else if (c == 'F') {
//         decryption = "C"
//     } else if (c == 'G') {
//         decryption = "D"
//     } else if (c == 'H') {
//         decryption = "E"
//     } else if (c == 'I') {
//         decryption = "F"
//     } else if (c == 'J') {
//         decryption = "G"
//     } else if (c == 'K') {
//         decryption = "H"
//     } else if (c == 'L') {
//         decryption = "I"
//     } else if (c == 'M') {
//         decryption = "J"
//     } else if (c == 'N') {
//         decryption = "K"
//     } else if (c == 'O') {
//         decryption = "L"
//     } else if (c == 'P') {
//         decryption = "M"
//     } else if (c == 'Q') {
//         decryption = "N"
//     } else if (c == 'R') {
//         decryption = "O"
//     } else if (c == 'S') {
//         decryption = "P"
//     } else if (c == 'T') {
//         decryption = "Q"
//     } else if (c == 'U') {
//         decryption = "R"
//     } else if (c == 'V') {
//         decryption = "S"
//     } else if (c == 'W') {
//         decryption = "T"
//     } else if (c == 'X') {
//         decryption = "U"
//     } else if (c == 'Y') {
//         decryption = "V"
//     } else if (c == 'Z') {
//         decryption = "W"
//     } else if (c == 'A') {
//         decryption = "X"
//     } else if (c == 'B') {
//         decryption = "Y"
//     } else if (c == 'C') {
//         decryption = "Z"
//     } else if (c == ' ') {
//         decryption = " "
//     } else if (c == ',') {
//         decryption = ", "
//     } else if (c == '.') {
//         decryption = ". "
//     } else if (c == '?') {
//         decryption = "? "
//     } else if (c == '!') {
//         decryption = "! "
//     }
//     else if (c == "'") {
//         decryption = "' "
//     }  else if (c == "3") {
//         decryption = "0"
//     } else if (c == "4") {
//         decryption = "1"
//     } else if (c == "5") {
//         decryption = "2"
//     } else if (c == "6") {
//         decryption = "3"
//     } else if (c == "7") {
//         decryption = "4"
//     } else if (c == "8") {
//         decryption = "5"
//     } else if (c == "9") {
//         decryption = "6"
//     } else if (c == "0") {
//         decryption = "7"
//     } else if (c == "1") {
//         decryption = "8"
//     } else if (c == "2") {
//         decryption = "9"
//     }else if (c == " - ") {
//         decryption == "|"
//     }
//     return decryption;
// }


// function decryptSentence(txt, message) {
//     // let st = document.getElementById("decryption");
//     // let enstatement = st.value;
//     let st = txt;
//     let EnStatement;
//     console.log("The Encryption is: " + EnStatement);
//     let DecryptedString = '';

//     for(let i = 1; i < st.length; i++) {
//         EnStatement = st[i].toUpperCase();
//     }

//     for (i = 0; i < EnStatement.length; i++) {
//         let string = EnStatement[i]
//         console.log("decrypted string:      " + string)
//         for(let j = 0; j < string.length; j++) {
//             let str =  Decrypt(string[j], message);
//             console.log(string[j])
//         DecryptedString = DecryptedString + str;
//         }
//     }


//     message.channel.send(DecryptedString);
//    // let Doutput = document.getElementById("DecryptSt").innerHTML = DecryptedString;

//     //console.log("The Decryption is: " + DecryptedString);



// }

// function clickMe() {
//     let link = document.createElement('A');
//     link.textContent = "HEHEHE";
//     document.querySelector('body').appendChild(link);
// }