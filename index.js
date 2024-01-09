//7-7-2020 -- 
const x = "2"
let y = "4"

// QB 10-8-2020
 let totalme = []
 let totalthey = []
//-----------

// # reminder 3/28/2023

let listening = false;

//QB 12-22-2020

let scores = [{id: 89}]
module.exports = scores

//-----

// SB 1-11-2021

let sbScores = [{id:6789}]


console.log(x + y)

const a = 5
const b = 8
const c = 2

let x1 = (-b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)
let x2 = (-b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)

console.log(x1 + ", " + x2)

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



const Discord = require("discord.js");
const {Intents} = require("discord.js");

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

const client = new Discord.Client();
module.exports = client

const cheerio = require("cheerio");
module.exports = cheerio

const request = require("request");
module.exports = request

const prefix = "-"
const prefix1 = "/"

const fs = require("fs");
// let scores = fs.readFileSync('scores.json');
// let tst = JSON.parse(scores);
// console.log(tst)
const {
    jar, get
} = require("request");
const {
    EMLINK
} = require("constants")
// const { toUnicode } = require("punycode")
// const { userInfo } = require("os")
// const { send } = require("process")
// const { index } = require("cheerio/lib/api/traversing")
// const { Server } = require("http")
// const { channel } = require("diagnostics_channel")
// const { update } = require("cheerio/lib/parse")





client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

// Token will not work, and will not be revealed for security reasons.
const token = "";


// COOLDOWN 8-10-2020

// const cooldowns = new Discord.Collection();

// if (!cooldowns.has(command.name)) {

// }

client.once("ready", () => {
    console.log("This bot is online!");
    // client.channels.cache.get("837545982492278814").send("Extremely sorry for the delay. I have not been keeping up latley, for weekdays quote time is 6pm PST");
    client.user.setActivity("How To Re-Unify Germany", {
       type: "WATCHING"
    }).catch(console.error);
    //client.user.setStatus("online")
    //client.user.setPresence("Reading")
    //client.user.set
    





    let dt = new Date()
    

    let day = dt.getDay()
    

      // Database of quotes
      
      const dataBase = [
        {
            author: "Karl Marx",
            quotes: [
            "History repeats itself, first as tragedy, second as farce.", 
            "Religion is the opium of the masses.",
             "Democracy is the road to socialism.", 
             "The philosophers have only interpreted the world, in various ways. The point, however, is to change it.", 
             "The last capitalist we hang shall be the one who sold us the rope.", 
             "Surround yourself with people who make you happy. People who make you laugh, who help you when you’re in need. People who genuinely care. They are the ones worth keeping in your life. Everyone else is just passing through.", 
             "Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win.", 
             "Reason has always existed, but not always in a reasonable form.", 
             "I am nothing but I must be everything.", 
             "To be radical is to grasp things by the root.",
             "If anything is certain, it is that I myself am not a Marxist.", 
            ]
        },
        {  author: "Vladamir Lenin",
            quotes: [
            "If the writer of these lines has succeeded in providing some material for clarifying these problems, he may regard his labours as not having been fruitless.", 
            "In the history of modern socialism this is a phenomenon, that the strife of the various trends within the socialist movement has from national become international.", 
           "If democracy, in essence, means the abolition of class domination, then why should not a socialist minister charm the whole bourgeois world by orations on class collaboration?", 
            "A basic condition for the necessary expansion of political agitation is the organisation of comprehensive political exposure.", 
            "This struggle must be organised, according to “all the rules of the art”, by people who are professionally engaged in revolutionary activity.", 
            "Attention, must be devoted principally to raising the workers to the level of revolutionaries; it is not at all our task to descend to the level of the “working masses”.", 
            "But every little difference may become a big one if it is insisted on.", 
            "That today, when the wave has ebbed, there remain and will remain only real Marxists, does not frighten us but rejoices us.",
            "Where the bourgeois economists saw a relation between things (the exchange of one commodity for another) Marx revealed a relation between people.", 
            "Capital, created by the labour of the worker, crushes the worker, ruining small proprietors and creating an army of unemployed.", 
            "By destroying small-scale production, capital leads to an increase in productivity of labour and to the creation of a monopoly position for the associations of big capitalists.", 
            "Capitalism has triumphed all over the world, but this triumph is only the prelude to the triumph of labour over capital.", 
            "War cannot be abolished unless classes are abolished and Socialism is created.", 
            "Socialists cannot achieve their great aim without fighting against all oppression of nations.",
            "It is not done in modern socialist parties to talk or even think about the significance of this idea, — the “withering away” of the state.", 
            "the working class must break up, smash the “ready-made state machinery,” and not confine itself merely to laying hold of it.",
           "Democracy for an insignificant minority, democracy for the rich — that is the democracy of capitalist society.",
            "The oppressed are allowed once every few years to decide which particular representatives of the oppressing class shall represent and repress them in parliament.", 
            "It is, of course, much easier to shout, abuse, and howl than to attempt to relate, to explain.", 
            ]
        },
        {
            author: "Joseph Stalin",
            quotes: [
            "Quantity has a quality all its own.", 
            "You cannot make a revolution with silk gloves.",
            "Gratitude is an illness suffered by dogs.",
            "People who cast the votes decide nothing. The people who count the votes decide everything.",
            "In the Soviet Union, it's takes more courage to retreat than advance.",
            "History shows that there are no invincible armies.",
            "The Pope! How many divisions has he got?",
            "Everyone imposes his own system as far as his army can reach.",
            "I believe in one thing only, the power of human will.",
            "Ideas are far more powerful than guns. We don't allow our enemies to have guns, why should we allow them to have ideas?",
            "If the opposition disarms, well and good. If it refuses to disarm, we shall disarm it ourselves.",
            ""
            ]
        },
        {
            author: "Mao Zedong",
            quotes: [
                "We communists are like seeds and the people are the soil. Wherever we go, we must unite with the people, take root and blossom among them.",
                "Politics is war without bloodshed, while war is politics with bloodshed.",
                "All political power comes from the barrel of a gun.",
                "We shall support whatever our enemies oppose and oppose whatever our enemies support.",
                "Be resolute, fear no sacrifice and surmount every difficulty to win victory.",
                "Maybe you're afraid of sinking. Don't think about it. If you don't think about it, you won't sink. If you do, you will.",
                "The people, and the people alone, are the motive force in the making of world history.",
                "Our principle is that the Party commands the gun, and the gun must never be allowed to command the Party.",
                "If one must fight one should confine oneself to conventional weapons."
            ]
        },
        {    
            author: "Otto Von Bismark",
            quotes: [
                "Only a fool learns from his own mistakes. The wise man learns from the mistakes of others.",
                "Politics is the art of the possible, the attainable — the art of the next best.",
                "Fools learn from experience. I prefer to learn from the experience of others.",
                "God has a special providence for fools, drunkards, and the United States of America.",
                "One day the great European War will come out of some damned foolish thing in the Balkans (1888).",
                "People never lie so much as before an election, during a war, or after a hunt.",
                "When you want to fool the world, tell the truth.",
                "Laws are like sausages. It's better not to see them being made.",
                "It is the destiny of the weak to be devoured by the strong.",
                "The secret of politics? Make a good treaty with Russia.",
                "The great questions of the day will not be settled by means of speeches and majority decisions but by iron and blood.",
                "The main thing is to make history not to write it.",
                "An appeal to fear never finds an echo in ~~German~~ ***Soviet*** hearts.",
            ]
        },
        {
            author: "General Murwa",
            quotes: [
                "Losing land is better than losing planes."
            ]
        }, 
        {
            author: "Fidel Castro",
            quotes: [
                "A revolution is not a bed of roses. A revolution is a struggle between the future and the past.",
                "The ever more sophisticated weapons piling up in the arsenals of the wealthiest and the mightiest can kill the illiterate, the ill, the poor and the hungry, but they cannot kill ignorance, illness, poverty or hunger.",
                "A revolution is a struggle to the death between the future and the past.",
                "Humanity can learn from those who have broken their chains. Those who have chained humanity for centuries cannot teach humanity anything.",
                "The fact is, when men carry the same ideals in their hearts, nothing can isolate them - neither prison walls nor the sod of cemeteries. For single memory, a single spirit, a single idea, a single conscience, a single dignity will sustain them all.",
                "A revolution is not a bed of roses.",
                "Victory has thousands father but failure always find itself an orphan.",
                " It does not matter how small you are if you have faith and plan of action.",
            ]
        },
        {
            author: "Sun Tzu",
            quotes: [
                "He will win who knows when to fight and when not to fight.",
                "In the midst of chaos, there is also opportunity.",
                "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
                "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.",
                "The greatest victory is that which requires no battle.",
                "Quickness is the essence of the war.",
                "Even the finest sword plunged into salt water will eventually rust.",
                "There is no instance of a nation benefiting from prolonged warfare.",
                "Build your opponent a golden bridge to retreat across.",
                "What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.",
                "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
                "Attack is the secret of defense; defense is the planning of an attack.",
                "Opportunities multiply as they are seized.",
                "Never venture, never win!",
            ]
        }, 
        {
            author: "Hồ Chí Minh",
            quotes: [
                "You can kill ten of our men for every one we kill of yours. But even at those odds, you will lose and we will win.",
                "Remember, the storm is a good opportunity for the pine and the cypress to show their strength and their stability.",
                "Mr. Schoenbrun, we have a secret weapon ... don't smile when I tell you this. Our secret weapon is nationalism. To have nationhood, which is a sign of maturity, is greater than any weapons in the world.",
                "When the prison doors are opened, the real dragon will fly out.",
                `Among the collection of crimes of American "civilization," lynching has a special place of honor.`,
            ]
        }
    
    ];

    console.log(dataBase[0].quotes.length);
    // client.channels.cache.get("837545982492278814").send("Sussy Bakas");

    
        
        setInterval(function updateDate() {
            let dt = new Date()



            let hours = dt.getHours()
            let mns = dt.getMinutes()
            let seconds = dt.getSeconds();
           /// console.log(`time: ${hours}:${mns}:${seconds}`);
           
         if( hours == 14 && mns == 0 && seconds == 0) {
            let doc = fs.readFileSync("quotes.json");
            let code = doc.toString()
            let jsondata = JSON.parse(code)   

            // Should run every time
            let pastAuthor = jsondata[0].author;
            let pastQuote = jsondata[0].quote;
            let dataIndex = generateValidIndex(pastAuthor);
            // let dataIndex = 5
            let quoteIndex = generateQuoteIndex(pastQuote, dataBase[dataIndex]); 

        //    console.log(client.channels.chache)

            client.channels.cache.get("837545982492278814").send(
            `
            *"${dataBase[dataIndex].quotes[quoteIndex]}"*
            \n*- ${dataBase[dataIndex].author}*
            
            `);


            

            // Db == database[valiIndex]
            // Q == quote

            function generateQuoteIndex(q, db) {
                let index = Math.floor(Math.random() * db.quotes.length);

                if (q != db.quotes[index]) {
                    jsondata[0].quote = db.quotes[index];
                    updateQuotes(jsondata,fs);
                    return index;
                } else {
                    return generateQuoteIndex(q, db);
                }
            }

            function updateQuotes (code, fs) {
                let toJSON = JSON.stringify(code,null,2)
                fs.writeFileSync("quotes.json", toJSON);
            }
            function generateValidIndex(a) {
                let index = Math.floor(Math.random() * dataBase.length);
        
                if (a != dataBase[index].author) {
                    jsondata[0].author = dataBase[index].author;
                    updateQuotes(jsondata, fs);
                    return index;
                } else {
                    return generateValidIndex(a);
                }
            }

            // Updates JSON File QUOTES.JSON

        }

        }, 1000);
       
});

let file;

// function readf (name) {
//      file = fs.readFileSync(name, "utf8")
//     console.log(file)
// } 

// function writef (name) {
//     file = fs.writeFileSync(name, )
// }

// //readf("read.txt")

setInterval( async function Updatetime () {

    let dt = new Date()


    let days = dt.getDay();
    let hours = dt.getHours()
    let mns = dt.getMinutes()
    let seconds = dt.getSeconds();
    
    // Checks reminders

    let rdoc = fs.readFileSync("data/reminders.json");
    let rcode = rdoc.toString()
    let reminderdata = JSON.parse(rcode)  

    for (let i = 0; i < reminderdata.length; i++) {
        
        if (reminderdata[i].days.includes(days) && reminderdata[i].hours == hours && reminderdata[i].minutes == mns && second == 0) {
            client.channels.cache.get('1092212367485587476').send(`${reminderdata[i].text}`)
        }
    }


        //console.log(dt)

        // console.log(days)

        if (days == 6 && hours == 1 && mns == 30 && seconds == 0) {
            client.channels.cache.get("747969735978778686").send(`<@&796480360778563641> sign up for flex`);
            client.channels.cache.get("747969735978778686").send(`<@&796480360778563641> sign up for flex`);
        }
        
        
    //    console.log(`Time: ${hours}:${mns}:${seconds}`)

        let ch = "730572904919465994"

        // let person = client.users.cache.get("303279285219622914") 
        
            let arnav = await client.users.fetch("303279285219622914") 
            let me =  await client.users.fetch("590420469862236160")
            let cheta =  await client.users.fetch("332219771053539328")
            let vick =  await client.users.fetch("439546060642320384")
            let ap = await client.users.fetch("535242785888927764")
            let dk =  await client.users.fetch("303277475998334976")
            let dg =  await client.users.fetch("346434640535355413");
            let adaada = await client.users.fetch("456466805058437122");
            let tn =  await client.users.fetch("628059657784655905")
            let franky = await client.users.fetch("776938990561263668")


           

            function dm (a, b) {
                a.send(`${b}`)
            }
       
            

            

//             // let arnav =("303279285219622914") 
//             // let me = "590420469862236160")
//             // let cheta = client.users.cache.get("332219771053539328")
//             // let vick = client.users.cache.get("439546060642320384")
//             // let ap = client.users.cache.get("535242785888927764")
//             // let dk =  client.users.cache.get("303277475998334976")
//             // let tn =  client.users.cache.get("628059657784655905")
            try {

                

                

//     //             if (hours == 6 && mns == 10 && seconds == 0) {
//     //                 me.send('<@!590420469862236160> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //                   //arnav.send('<@!303279285219622914> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //             //      cheta.send('<@!332219771053539328> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //             // vick.send('<@!439546060642320384> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //             // ap.send('<@!535242785888927764> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //              dk.send('<@!303277475998334976> hello there, this is a test pls dm AB moment saying it works pls :)')
//     //             }
                
                
//     //             if (day == 0 && hours == 17 && mns == 0 && seconds == 0){
//     //                 arnav.send('<@!303279285219622914> Monday Schedule tmrw');
//     //                  me.send('<@!590420469862236160> Monday Schedule tmrw');
//     //                  cheta.send('<@!332219771053539328> Monday Schedule tmrw');
//     //                  vick.send('<@!439546060642320384> Monday Schedule tmrw');
//     //                  ap.send('<@!535242785888927764> Monday Schedule tmrw');
//     //                  dk.send('<@!303277475998334976> Monday Schedule tmrw');
//     //             }



//                     // Monday Schdule
//                     // __________________________
//                     if (day == 1 ) {
//                         //Block 1
//                         if (hours == 9 && mns == 13 && seconds == 30) {

//                             arnav.send('<@!303279285219622914> Advisroy starts at 9:15');
//                             me.send('<@!590420469862236160> Advisroy starts at 9:15');
//                             cheta.send('<@!332219771053539328> Advisroy starts at 9:15');
//                             vick.send('<@!439546060642320384> Advisroy starts at 9:15');
//                             ap.send('<@!535242785888927764> Advisroy starts at 9:15');
//                              dk.send('<@!303277475998334976> Advisroy starts at 9:15');
//                         } 

//                         else if (hours == 13 && mns == 23 && seconds == 30) {
//                             me.send("asdf")
//                             dm(me, "kekekekek")
//                         }
//                     }
//     //                     //Block 2
//     //                     // else if (hours == 9 && mns == 48 && seconds == 30) {

//     //                     //     arnav.send('<@!303279285219622914> 2nd block starts at 9:50');
//     //                     //      me.send('<@!590420469862236160> 2nd block starts at 9:50');
//     //                     //      cheta.send('<@!332219771053539328> 2nd block starts at 9:50');
//     //                     //      vick.send('<@!439546060642320384> 2nd block starts at 9:50');
//     //                     //      ap.send('<@!535242785888927764> 2nd block starts at 9:50');
//     //                     //     dk.send('<@!303277475998334976> 1st block starts at 9:15');
                        
//     //                     // }
//     //                     // //Block 3
//     //                     // else if (hours == 10 && mns == 33 && seconds == 30) {

//     //                     //     arnav.send('<@!303279285219622914> 3rd block starts at 10:35');
//     //                     //      me.send('<@!590420469862236160> 3rd block starts at 10:35');
//     //                     //      cheta.send('<@!332219771053539328> 3rd block starts at 10:35');
//     //                     //      vick.send('<@!439546060642320384> 3rd block starts at 10:35');
//     //                     //      ap.send('<@!535242785888927764> 3rd block starts at 10:35');
//     //                     //      dk.send('<@!303277475998334976> 3rd block starts at 10:35');
//     //                     // }
//     //                     // //Block 4
//     //                     // else if (hours == 11 && mquotesns == 8 && seconds == 30) {

//     //                     //     arnav.send('<@!303279285219622914> 4th block starts at 11:10');
//     //                     //      me.send('<@!590420469862236160> 4th block starts at 11:10');
//     //                     //      cheta.send('<@!332219771053539328> 4th block starts at 11:10');
//     //                     //      vick.send('<@!439546060642320384> 4th block starts at 11:10');
//     //                     //      ap.send('<@!535242785888927764> 4th block starts at 11:10');
//     //                    //      dk.send('<@!303277475998334976> 4th block starts at 11:10');
//                       // }
                    
                // ___________________________ 
            //     if (1 < day  && day< 6) {
            //         if (hours == 8 && mns == 28 && seconds == 30){
            //             console.log(day)
            //             arnav.send('<@!303279285219622914> 1st block starts at 8:30');
            //             me.send('<@!590420469862236160> 1st block starts at 8:30');
            //              cheta.send('<@!332219771053539328> 1st block starts at 8:30');
            //             // vick.send('<@!439546060642320384> 1st block starts at 8:30');
            //             ap.send('<@!535242785888927764> 1st block starts at 8:30');
            //           //  dk.send('<@!303277475998334976> 1st block starts at 8:30');
            //             dg.send('<@!346434640535355413> 1st block starts at 8:30');
            //             adaada.send('<@!456466805058437122> 1st block starts at 8:30');
            //             franky.send("<@!776938990561263668> 1st block starts at 8:30 ")
            //             // arnav.send('<@!303279285219622914> sorry for system failure');
            //             //  me.send('<@!590420469862236160> sorry for system failure');
            //             //  cheta.send('<@!332219771053539328> sorry for system failure');
            //             //  vick.send('<@!439546060642320384> sorry for system failure')
            //         }
            //         else if (hours == 9 && mns == 30 && seconds == 30){
            //             arnav.send('<@!303279285219622914> 2nd block starts at 9:32');
            //              me.send('<@!590420469862236160> 2nd block starts at 9:32');
            //              cheta.send('<@!332219771053539328> 2nd block starts at 9:32');
            //            //  vick.send('<@!439546060642320384> 2nd block starts at 9:32');
            //              ap.send('<@!535242785888927764> 2nd block starts at 9:32');
            //           //  dk.send('<@!303277475998334976> 2nd block starts at 9:32');
            //             dg.send('<@!346434640535355413> 2nd block starts at 9:32');
            //             adaada.send('<@!456466805058437122> 2nd block starts at 9:32');
            //             franky.send("<@!776938990561263668> 2nd block starts at 9:32 ")
            //                 me.send("msgs sent for 2nd block")
            //         }
            //          else if (hours == 10 && mns == 32 && seconds == 30){
            //             arnav.send('<@!303279285219622914> 3rd block starts at 10:34');
            //              me.send('<@!590420469862236160> 3rd block starts at 10:34')
            //              cheta.send('<@!332219771053539328> 3rd block starts at 10:34')
            //             // vick.send('<@!439546060642320384> 3rd block starts at 10:34')
            //              ap.send('<@!535242785888927764> 3rd block starts at 10:34')
            //             // dk.send('<@!303277475998334976> 3rd block starts at 10:34')
            //              dg.send('<@!346434640535355413> 3rd block starts at 10:34');
            //              adaada.send('<@!456466805058437122> 3rd block starts at 10:34');
            //             franky.send("<@!776938990561263668> 3rd block starts at 10:34")
            //              me.send("msgs sent for 3rd block")
            //             }
            //         else if (hours == 11 && mns == 34 && seconds == 30){
            //             arnav.send('<@!303279285219622914> 4th block starts at 11:36');
            //              me.send('<@!590420469862236160> 4th block starts at 11:36')
            //              cheta.send('<@!332219771053539328> 4th block starts at 11:36')
            //             // vick.send('<@!439546060642320384> 4th block starts at 11:36')
            //              ap.send('<@!535242785888927764> 4th block starts at 11:36')
            //              dg.send('<@!346434640535355413> 4th block starts at 11:36');
            //              adaada.send('<@!456466805058437122> 4th block starts at 11:36');
            //             franky.send("<@!776938990561263668> 4th block starts at 11:36")
            //              // dk.send('<@!303277475998334976> 4th block starts at 1:30')
            //             // tn.send('<@!628059657784655905> Trevor The rex 😉, 4th block starts at 1:30')
            //              me.send("msgs sent for 4th block")
            //             }
            //         // else if (hours == 12 & mns == 52 && seconds == 20) {
            //         //     me.send("<@!590420469862236160> asfdlajksfdj;lakjsfd");
            //         // }
            //         }

                    
                
        
        } catch(err) {

      }

        
      }, 1000) //setInterval(Updatetime, 1000)
    
//         try {Updatetime();}
//         catch(err) {

//         }


        // client.on('messageDelete',  async message => {
        //     let content = message.content
        //     let id = message.channel.id
        //     let realid = message.author.id
        //     let disc = message.author.discriminator
        //     let sendingChannel = client.channels.cache.find(chan => chan.id === "752777803635884092")
        //     console.log(`ID: ${realid} and ${disc} and ${message.author.username}`)
        //     console.log(content)
            
        //     if (id == "775832395298373712" || id == "781780331740790784" || id == "730572904919465994" || id == "752777803635884092"){
        //         if (!message.guild) return;

        //         const fetchLogs = await message.guild.fetchAuditLogs({
        //             limit: 1,
        //             type: "MESSAGE_DELETE",
        //         });

        //         let delLog = fetchLogs.entries.first();

        //         // False Alarm, Not enough info
        //         if(!delLog) return sendingChannel.send(`A message by ${message.author.tag} was deleted, but no relevant logs were found`)

        //         let {executor, target} = delLog;

        //         if (target.id === message.author.id) {
        //             sendingChannel.send(`ALERTT !!!! \n-------------------------------------------------------------------------\n 
        //             \n A message by <@${message.author.id}> was deleted by <@${executor.id}>. 
        //             \n \n Message Content: ${content}
        //             \n Channel: ${message.channel}
        //             \n -------------------------------------------------------------------------\n `)
                    
        //         } else {
        //             sendingChannel.send(`ALERTT !!!! \n-------------------------------------------------------------------------\n 
        //             \n A message by <@${message.author.id}> was deleted, by himself. 
        //             \n \n Content: ${content} 
        //             \n Channel: ${message.channel}
        //             \n -------------------------------------------------------------------------\n  `);
        //         }
        //    }

        // });

        // Author id
        let reminderid;

        client.on("message", async message => {

            // 3/28/2023 Set

            // if (message.content.toLowerCase().startsWith("-set") == true) {
            //     reminderid = message.author.id
            // }


            try {
                if (message.content.includes("https://discord.gg/family-lounge") && !message.member.roles.cache.has("637612638934925329")) {
                    message.delete()
                }
                
            } catch(err) {
                //
                    // 
            }
        
           if (message.author.id == 563911915772837890) {
            console.log("kicked suka")
            console.log(message.content)
            message.delete();
           }
           
           if (message.author.id == 590420469862236160) {
               if (message.content.includes("(") && message.content[0] == "!") {
                //    console.log(message.content);
                   let str = message.content;
                   console.log(str);
                   for (let i = 1; i < str.length; i++) {
                        str = str.replace("(", "i");
                        str  = str.replace(")", "k");
                        
                        str[0] = " ";
                   }

                   message.channel.send( str )
               }
           }

        });



        client.on("message", async message => {
            let id;
            let server;
            let name;
            let msg;
            let grandChecker = 0

            try {
                // if (message.author.id == "829495856842670100") {
                //     message.delete();
                // }
            }catch(err) {

            }
            // try {
            //     id = message.author.id
            //     server = message.guild.name;
            //     name = message.author.username;
            //     msg = message.content;
            // } catch (err) {
            //     console.log("DMSSS");
            //     grandChecker++
            // }
            // if (grandChecker == 0) {
            //     let dt = new Date();
            //     let hours = dt.getHours();
            //     let mns = dt.getMinutes();
            //     let month = dt.getMonth();
            //     let year = dt.getFullYear();
            //     let day = dt.getUTCDate();

            //     let doc = fs.readFileSync("msg.json");
            //     let code = doc.toString()
            //     let jsondata = JSON.parse(code)

            //     let checker = 0

            //     let date = `${month+1}/${day}/${year}`

            //     let serverObj = {
            //         server: server,
            //         data: [
            //             {
            //                 date: `${month+1}/${day}/${year}`,
            //                 authors: [
            //                     {
            //                         id: message.author.id,
            //                         name: message.author,
            //                         msgs: []
            //                     }
            //                 ]
            //             }
            //         ]  
            //     }


            //     let dateObject = {
            //         date: `${month+1}/${day}/${year}`,
            //         authors: [
            //             {
            //                 id: message.author.id,
            //                 name: message.author,
            //                 msgs: []
            //             }
            //         ]
            //     }

            //     let sindex = getServerIndex(server, jsondata);
            //     let dindex = getDateIndex(date, server, jsondata);
            //     let aindex = getAuthorIndex(message.author.id, date, server, jsondata);

            //     for (let i = 0; i < jsondata.length; i++) {
            //         if (jsondata[i].server == server) {
            //             checker++
            //         }
            //     }

            //     if (checker == 0) {
            //         console.log("ran")
            //         jsondata.push(serverObj);
            //         updateMessages(jsondata, fs);
            //     }

            //     let dchecker = 0;
            //     for (let i = 0; i < jsondata[sindex].data.length; i++) {
            //         if (jsondata[sindex].data[dindex].date == date) {
            //             dchecker++
            //         }
                
                
            //     if (dchecker == 0) {
            //         jsondata[sindex].data.push(dateObject);
            //         updateMessages(jsondata, fs);
            //     }

            //     let check = 0
            //     let msgObj = {
            //         author: `${name} at ${hours}:${mns} on ${month}/${day}/${year}`,
            //         content: msg
            //     };

                
            //    // console.log(index)

            //     for (let i=0; i < jsondata[sindex].data[dindex].msgs.length; i++) {
            //         if (jsondata[sindex].data[dindex].msgs[i] == msg) {
            //             check++
            //         }
            //     }

            //     if (check == 0) {
            //         jsondata[index].msgs.push(msgObj);
            //         updateMessages(jsondata, fs);
            //     }
            // }

            // function getAuthorIndex (authorId, date, server, jsondata) {
            //     let sI = getServerIndex(server, jsondata);
            //     let dI = getDateIndex(date, server, jsondata);
            //     let index;

            //     for (let i = 0; i < jsondata[sI].data[dI].authors.length; i++) {
            //         if (jsondata[sI].data[dI].authors[i].id == authorId) {
            //             return index;
            //         }
            //     }
            // }
            // function getDateIndex (date, server, jsondata) {
            //     serverIndex = getServerIndex(server , jsondata)
            //     let index;

            //     for (let i = 0; i < jsondata[serverIndex].data.length; i++) {
            //         if (jsondata[serverIndex].data[i].date == date) {
            //             index = i;
            //             return index
            //         }
            //     }
            // }
            // function getServerIndex (server, jsondata) {
            //     let index;
            //     for (let i = 0; i < jsondata.length; i++) {
            //         if (server == jsondata[i].server) {
            //             index = i;
            //             return index;
            //         }
            //     }
            // }

            // function updateMessages (code, fs) {

            //     let toJSON = JSON.stringify(code,null,2)
            //     fs.writeFileSync("msg.json", toJSON)
            // }

        });

        client.on("message", async message => {
            const id = message.author.id
            let idserver
           try{  idserver = message.guild.id}
           catch (err) {console.log("DMSSSSS")}

           try {
            if (message.channel.id == "752777803635884092") {
                message.delete();
                console.log(message.content)
            }
            } catch(err) {
                console.log("sus")
            }

            //console.log(idserver)
           
           
            // if (id == 590420469862236160) {
            //     let channel = client.channels.cache.get("837545982492278814")
            //     let msg = `The great questions of the day will not be settled by means of speeches and majority decisions but by iron and blood.\n - *Yours Truly*`
            //     let me = await client.users.fetch("590420469862236160")
            //     channel.send(msg)
            // }
           
            if (idserver == "730090959605596261"){
                let dt = new Date()
                let hours = dt.getHours()
                let mns = dt.getMinutes()
           //   console.log(`${hours}:${mns}      ${message.author.username}\n\n${message.content}\n\n channel: ${message.channel.name} ${message.channel.id}\n`)
            }
            try {
                let mdoc = fs.readFileSync("money.json")
                let mcode = mdoc.toString()
                let mjsondata = JSON.parse(mcode)

                function updateMoneyJson (code, fs) {
                    let toJSON = JSON.stringify(code, null, 2)
                    fs.writeFileSync("./money.json", toJSON)
                }

                let muser;

                function AddMoola(id, amt) {
                    for (let i = 0; i < mjsondata.length; i++) {
                        if (mjsondata[i].id == id) {
                            mjsondata[i].money = mjsondata[i].money + amt;
                            updateMoneyJson(mjsondata, fs);
                        }
                    }
                }
               

                

            if( message.content.toLowerCase().includes("kmao") == true) {
                await message.react("🇰")
                await message.react("🇲")
                await message.react("🇦")
                await message.react("🇴")
                
                
            }

             if (message.content.toLowerCase().includes("kek") == true) {
                await message.react (":K_:830922855352500284")
                await message.react("🇪")
                await message.react("🇰")
            }

            if (message.content.toLowerCase().includes(":unknown_beeg:770819821394722866") || message.content.toLowerCase().includes("?")) {
                await message.react(":unknown_beeg:770819821394722866");
            }

             if ( message.content.toLowerCase().includes("kamoud") == true || message.content.toLowerCase().includes("kmoud") == true) {
                await message.react (":K_:830922855352500284")
                await message.react("🇲")
                await message.react("🇴")
                await message.react("🇺")
                await message.react("🇩")
            }

            if ( message.content.toLowerCase().includes("lmao") == true || message.content.toLowerCase().includes("lmfao") == true) {
                AddMoola(message.author.id, 5);
                await message.react ("🍑")
                try {
                    // if (message.author.id == "332219771053539328" ) {
                        
                    //     message.member.kick();
                    //     message.author.send(`https://discord.gg/2V46grHP7e`)
                    //     message.author.send(`
                    //     Hello, I congratulate you on being a part of the second year anniversary of the Soviet Safehouse. As a reminder, please keep this discussion confidential as to not ruin this surprise for others. Thanks! Alsoo if you were wondering I kicked you from the server for saying "lmao" so you probably don't want to say it again until tomorrow lmao, use kek and kmao.
                    //     `);
                    //     console.log("Get Yo Jaboogly outta here");
                        
                    // }
                } catch(err) {
                    console.log("Jaboogly");
                    console.log(err)
                }
                

                
            }

             if (message.content.toLowerCase().includes("kamoud?") == true || message.content.toLowerCase().includes("kmoud?") == true) {
                await message.react (":K_:830922855352500284")
                await message.react("🇲")
                await message.react("🇴")
                await message.react("🇺")
                await message.react("🇩")
                await message.react(":unknown_beeg:770819821394722866")
            }
        }catch(err) {

        }

             if (message.content.toLowerCase().includes("lmoud?") == true || message.content.toLowerCase().includes("lmoud") == true) {
                await message.react (":hamoud:749001168386129960")
              
                
            }

            if (message.content.toLowerCase().includes("nice") == true || message.content.toLowerCase().includes("noice") == true) {
                if (id != "729934118925893704"){
                    AddMoola(message.author.id, 5);
                 await message.react(":noice:840984980032192513")
                 
                }
              
                
            }

            if (message.content == "asdf rak") {
               let help = client.channels.cache.find(channel => channel.id == "730090961505353730")
               help.send("fine")

              // console.log(channels)

               //chelp.send("<@!456466805058437122>, A")
            }

            let  names = ["adithya", "victor", "devansh", "pranav", "arnav", "akarsh"];

            if (message.content == "fuck everyone") {
                let  names = ["Adithya", "Victor", "Devansh", "Pranav", "Arnav", "Akarsh", "Adaada", "AC", "Jew", "Rex", "Guot", "Atul"];
    
                for (let i = 0; i < names.length; i++) {
                   fuck(names[i]);
                }

                function fuck (a) {
                    message.channel.send(`Fuck ${a}!`)
                }
 
               // console.log(channels)
 
                //chelp.send("<@!456466805058437122>, A")
             }


             if (message.content.toLowerCase().includes("fuck") == true){
                 let arr = message.content.toLowerCase().split(" ")


                 filter(arr[1], arr[2])

                 function filter (n, m="") {
                    for (let i = 0; i <= names.length; i++) {
                        if (names[i] == n || names[i] == m){
                            message.reply("I second that!")
                        }
                    }
                 }
             }
   

             if (message.content.toLowerCase().includes("sus") == true || message.content.toLowerCase().includes("sussy") == true || message.content.toLowerCase().includes("susy") == true) {
              
            try {
                if ( id != "729934118925893704") {
                let doc = fs.readFileSync("sus.json")
                        let code = doc.toString()
                        let jsondata = JSON.parse(code)

                let control = 5

                try {
                await message.react (":redsus:836360760590336110")
                } catch(e){
                    
                }
                let num = Math.floor((Math.random() * control) + 1);
                let num1 = Math.floor((Math.random() * control) + 1);

                let superNum1 = Math.floor((Math.random() * 100) + 1);
                let superNum2 = Math.floor((Math.random() * 100) + 1);

                console.log("-----------------------------------")
                console.log(num1)
                console.log(num)
                console.log("-----------------------------------")
                console.log(superNum1)
                console.log(superNum2)
                
                    count(false)
                
                if (superNum1 == superNum2) {
                    message.channel.send(`${"<:redsus:836360760590336110>"} ${"<:carrotamogus:836360679908179979>"}, <@!${id}> You are SUPER Sussy`);
                    AddMoola(message.author.id, 50);

                } else  {
                
                    if (num == num1 &&id != "729934118925893704" ) {
                    
                        message.channel.send(` ${"<:redsus:836360760590336110>"} <@!${id}>, You are very SUSSY`)
                        count(true)
                        
                    }
                }

                function confirm (id) {
                    let index = jsondata.findIndex( k => k.id == id)
                
                    return index
                }

               function count (a) {
                let index = confirm(id)
                sus(id, fs)
                
                if (a == true) {
                    AddMoola(message.author.id, 15);
                    jsondata[index].supercount = jsondata[index].supercount + 1
                }
                else {
                    AddMoola(message.author.id, 5);
                    jsondata[index].count = jsondata[index].count + 1
                }
                updateSus(jsondata, fs, index)
               }

                function sus (person, fs) {
                   
                    
                        let checker = 0
                        let dude = {
                            "Author": message.author.username,
                            "id": id,
                            "count": 1,
                            "supercount":0
                        }
                
                        for(let i = 0; i < jsondata.length; i++) {
                            if (jsondata[i].Author == dude.Author || jsondata[i].id == dude.id) {
                                checker ++
                            }
                        }
                
                        if (checker == 0) {
                
                        jsondata.push(dude)
                
                        updateSus(jsondata, fs)
                        }
                }
                
                function updateSus (code, fs, person) {

                    let toJSON = JSON.stringify(code,null,2)
                    fs.writeFileSync("sus.json", toJSON)
                }  

                let index = confirm(id)
                
                if(message.content == "sus count") {
                    message.reply(`You have been being Sussy for ${jsondata[index].count} times and you have been super sussy for ${jsondata[index].supercount} times`)
                }
                let ranks = []

                if (message.content == "sus list") {
                    let countss = []
                    for (let i = 0; i < jsondata.length; i++) {
                        countss.push(jsondata[i].count);
                    }

                    countss = rank(countss)
                    

                    for (let i = 0; i<countss.length; i++) {
                        compare(countss[i])
                    }

                    message.channel.send("SUSSINESS RANKS")

                    for (let i = 0; i<ranks.length; i++) {
                        setTimeout(function () {
                             message.channel.send(`${i+1}  ${ranks[i].name}  count: ${ranks[i].count}`);
                        }, i * 1500);
                    }
                }

                function rank (code) {
                    return code.sort((a,b) => b-a);
                }

                function compare (cond) {
                    for (let i = 0; i< jsondata.length; i++) {
                        if (cond == jsondata[i].count) {
                            let obj = {"name": jsondata[i].Author, "count": jsondata[i].count}
                            ranks.push(obj)
                        }
                    }

                }
            }
            } catch(err) {

            }
            }

            

            if (message.content.toLowerCase().includes("soviet") == true || message.content.toLowerCase().includes("communism") == true) {
                await message.react (":stalinemoji:837477945261948948")
                await message.react (":kfc:837478011502198855")
                
            }
            if (message.content.toLowerCase().includes("drunkard") == true) {
                await message.react ("🤬")
                
            }

            if (message.content.toLowerCase().includes("exactly") == true) {
                 message.channel.send ("It is actually spelled: **egj**actly")
                
            }

            if (message.content.toLowerCase().includes("egjactly") == true) {
                await message.react("🇪")
                await message.react("🇬")
                await message.react("🇯")
                await message.react("🇦")
                await message.react("🇨")
                await message.react("🇹")
                await message.react("🇱")
                await message.react("🇾")
               
           }

           if (message.content.toLowerCase().includes("lmdo") == true || message.content.toLowerCase().includes("lmdo") == true || message.content.toLowerCase().includes("lmfdo") == true || message.content.toLowerCase().includes("lfmdo") == true || message.content.toLowerCase().includes("ldmo") == true) {
            if ( id != "729934118925893704") {
                let doc = fs.readFileSync("egg.json")
                        let code = doc.toString()
                        let jsondata;
                        jsondata = JSON.parse(code)

                await message.react("🍆")
                egg(fs)
                let contrl = 5

                let tm1 = Math.floor(Math.random() * contrl + 1)
                let tm2 =  Math.floor(Math.random() * contrl + 1)
                console.log(`EG1: ${tm1} \n EG2: ${tm2}`)

                if (tm1 == tm2) {
                    plant(true, fs)
                } else {
                    plant(false, fs)
                }

                if (message.content.toLowerCase().includes("lmdo count") == true) {
                    let ix = indx(message.author.id)

                    message.reply(`You have laughed your dick off ${jsondata[ix].count} times and you have needed a replacement ${jsondata[ix].superCount} times.`)
                }

                function indx (id) {
                    let index = jsondata.findIndex( k => k.id == id)
                
                    return index
                }
                
                function plant (a, fs) {
                    let ix = indx(message.author.id)
                    if (a == true) {
                        message.reply("You appear to have misplaced your dick while laughing. Here is a replacement: 🍆")
                        jsondata[ix].superCount = jsondata[ix].superCount + 1
                        jsondata[ix].count = jsondata[ix].count + 1
                        updateEgg(jsondata, fs)
                    }

                    else {
                        
                        jsondata[ix].count = jsondata[ix].count + 1
                        updateEgg(jsondata,fs)
                    }
                }
                
                function egg (fs) {
                    let cheker = 0
                    let obj = {
                        "id": message.author.id,
                        "person": message.author.username,
                        "count": 1,
                        "superCount": 0
                    }

                    for (let i = 0; i < jsondata.length; i++) {
                        if (jsondata[i].id == message.author.id || jsondata[i].person == message.author.username) {
                            cheker++
                        }
                    }

                    if (cheker == 0) {

                        jsondata.push(obj)
                        updateEgg(jsondata, fs)
                    }

                }

            
                function updateEgg (code, fs) {

                    let toJSON = JSON.stringify(code,null,2)
                    fs.writeFileSync("egg.json", toJSON)
                }  

               
            }
           }

            

       

            function malware (person, fs) {
                console.log("emoji")
                let doc = fs.readFileSync("malware.json")
                    let code = doc.toString()
                    let jsondata = JSON.parse(code)
                    let checker = 0
            
                    for(let i = 0; i < jsondata.length; i++) {
                        if (jsondata[i].username == person.username || jsondata[i].discriminator == person.discriminator) {
                            checker ++
                        }
                    }
            
                    if (checker == 0) {
            
                    jsondata.push(person)
            
                    updateMalware(jsondata, fs)
                    }
            }
            
            function updateMalware (code, fs) {
                let toJSON = JSON.stringify(code,null,2)
                fs.writeFileSync("malware.json", toJSON)
            }  
            
            try {
             if (message.guild.id == "689990682714046464" || message.guild.id == "594905154332131329") {
                  malware(message.author, fs)
             } 
           
            }

            catch (err) {
                console.log("DMS")
            }

            async function malwareDM(person, jsondata) {
                let pID;
                for(let i = 0; i < jsondata.length; i++) {
                    if (person == jsondata[i].username || person == jsondata[i].id) {
                        pID = jsondata[i].id
                    }
                }


            }

            // async function  guilmembers (id) {
            //     const serv = await client.guilds.cache.get(id)
            //     serv.members.cache.forEach(person => {
                    
            //     })
            // }

            // guilmembers("689990682714046464")
           
            
        })

try {
client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //if (!message.content.startsWith(prefix1) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    // -ac hi how r u
    // args = hi how r u

    console.log(args)
    const command = args.shift().toLowerCase();
    module.exports = command

    console.log(`This is the command: ${command}`)

    let input = message.content.slice(prefix.length).split(" ");
    input = input.map( (el) => {
        return el.toLocaleLowerCase()
    })
    module.exports = input



    console.log("Real: " + input)

    const input2 = message.content.slice(prefix1.length).split(" ");

    console.log(input2)



    // if(true) {
    //     message.channel.send("I Am Here !!")
    // }

    // Commands 

    // Ping command
    if (command === "ping") {
        client.commands.get("ping").execute(message, args);
    }

    // Tubes Command
    else if (command == "youtube" || command == "ourtube") {
        client.commands.get("tubes").execute(message, args)

    }

    // Weather API 1/22/2023
    else if (command == "weather") {
        client.commands.get("weather").execute(message, args)
    }

    // Jokes API 1/28/2023

    else if (command == "joke") {
        client.commands.get("joke").execute(message, args)
    }

    // Hello Command
    else if (command == "hi") {
        message.channel.send(`${message.author} Hello, Friend`)
    }
    // Bye Command
    else if (command == "bye") {
        message.channel.send(`${message.author} Bye, Friend`)
    }

    // Help Command
    else if (command == "help") {
        client.commands.get("help").execute(message, args)

    }

    // Spam Command
    else if (command == "spam") {
        client.commands.get("spammer").execute(message, args)

    }

    //Monopoly link
    else if (command == "mono") {
        //message.channel.send("https://boardgamesonline.net/Games/online/play/monopoli")
        message.channel.send("https://richup.io/")
    }

    else if (command == "image") {
        try {
            let category = input.slice(1)
            module.exports = category
            client.commands.get("improvedImages").execute(message, args)
            console.log(category)
        } catch (err) {

        }

    }

    // Factor Function
    else if (command == "factor") {
        client.commands.get("factor").execute(message, args)
    }

    // Secret 
    else if (command == "bylat") {
        message.channel.send("CYKA")
    }

    // Secret 
    else if (command == "cyka") {
        message.channel.send("BYLAT")
    }

    // Secret 
    else if (command == "holadiez") {
        message.channel.send("YA KANYASHNA")
    } else if (command == "em") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields({
                name: 'Regular field title',
                value: 'Some value here'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true
            }, {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true
            }, )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(exampleEmbed);
    }

    // Buzz in
    else if (command == "buzzin") {
        message.channel.send("https://buzzin.live")
    }

    // Cheta Randomizer
    else if (command == "cheta") {
        let Cheta = ["The Guy who likes to do assasins creed in Real Life", "The Jesuit", "The doodle who changes his pfp frequently", "The guy that lives in a mansion", "The Guy who thinks he can sing in vc", "The guy who earrapes everyone in vc", "The guy that dances on people.", "The anti-dan", "Bane of Bollu", "AKA Red Leg"]
        let cheta = Math.floor((Math.random() * Cheta.length) + 0)
        message.channel.send(Cheta[cheta]);
    }

    // Ceaser cipher
    else if (command == "cen" || command == "cden") {
        client.commands.get("cen").execute(message, args)
    } else if (command == "spy") {
        message.channel.send("https://www.spyfall.app/")
    }

    // Reminder System 3/27/2023

    else if(command == "set") {
        client.commands.get("reminder").execute(message, args)
    }

    // Roles / Permissions 7-23-2020
    else if (command == "pin") {
        message.member.roles.add("732773056208175104")
    } else if (command == "rpin") {
        let mem = input[1]
        console.log(mem)
        mem.roles.remove("732773056208175104")
     }else if (command == "d") {
        message.channel.send("DID I ASK")
    }

    // poll 8-10-2020 -- 8-11-2020
    else if (command == "poll") {
        //client.commands.get("poll").execute(message, args)
        //message.channel.send("poll ?")

        let pollChannel = message.mentions.channels.first();
        let pollDescription = input.slice(2).join(" ");

        let embedPoll = new Discord.MessageEmbed()
            .setColor("#0087dd")
            .setTitle("😮 Poll 😮")
            .setDescription(`${pollDescription}`);

        let msgEmbed = await pollChannel.send(embedPoll);

        await msgEmbed.react("👍");
        await msgEmbed.react("👎");

        
    }

    // Black Jack 8-11-2020 --
    else if (command == "blj") {
        client.commands.get("blackJack").execute(message, args)
    }

    // Random num
    else if (command == "rin") {
        client.commands.get("randint").execute(message, args)

    } else if (command == "abmoment") {
        //message.channel.send("<@628059657784655905> Noob");
         message.channel.send("<@590420469862236160> Noob");
    } else if (command == "vkmoment") {
        message.channel.send("<@439546060642320384> Noob")
    } else if (command == "almoment") {
        message.channel.send("<@332219771053539328> Noob")
    } else if (command == "acmoment") {
        message.channel.send("<@!303279285219622914> Noob")
    } else if (command == "adaadamoment" || command == "agmoment") {
        message.channel.send("<@!456466805058437122> Noob")
    } else if (command == "apmoment") {
        message.channel.send("<@535242785888927764> Noob")
    } else if (command == "pmmoment") {
        message.channel.send("<@433040068958093312> Noob")
    } 
    else if (command == "dkmoment") {
        message.channel.send("<@303277475998334976> Noob")
    }
    else if (command == "jewmoment" || command == "yzmoment") {
        message.channel.send("<@549110613335605248> Noob")
    }
    else if (command == "rj") {
        message.channel.send("reverseJabba")
    }

    // 12-18-2020
    else if (command == "abt" || command == "about") {
        message.channel.send("https://discord.com/oauth2/authorize?client_id=729934118925893704&permissions=8&scope=bot")
    }

    // 8-15-2020 AKarsh LEGELA
    else if (command == "legend") {
        client.commands.get("legend").execute(message, args)

    } 

    else if (command == "purge") {
        client.commands.get("purge").execute(message, args)
    }
    else if (command == "tst") {
d
    } 
    else if (command == "edit") {
        let User = client.users.cache.get("590420469862236160")

        console.log(User)
        User.dmChannel.messages.fetch("994086195963367474").then(dmMessage => {
            // Editing the message.
            dmMessage.edit("I have an update!");
        })
    }
    else if (command == "spin") {
        let names = ["Adithya", "Arnav", "Pranav", "Victor", "Akarsh", "Devansh", "Atul", "Adaada"]

        let x = Math.floor((Math.random() * names.length) + 0)

        let nations = ["Yugoslavia", "Bulgaria", "Russia", "Germany", "China", "India", "Japan", "North Korea", "USSR", "Great Britain"] 

        let p = Math.floor((Math.random() * nations.length) + 0)

        let ACembed = new Discord.MessageEmbed()
            .setColor("#40c2b3")
            .setTitle("You're It!")
            .setDescription(`${nations[p]} has chosen ${names[x]}`)


        message.channel.send(ACembed)

    } 
    else if (command == "crean") {
        let cEmbed = new Discord.MessageEmbed()
            .setTitle("Crean")
            .setColor("#efa379")
            .attachFiles(["../Discord/pictures/crean.png"])
            .setImage("attachment://crean.png")
        message.channel.send(cEmbed)
    } 
    else if (command == "ve") {
        function xs(xV, yV, xP, yP) {
            let vertex = ((xP - xV) ** 2)
            let vertexy = yV
            let pointY = yP

            let a;

            if (vertexy < 0) {
                a = (yP + -vertexy) / vertex
            } else {
                a = (yP - vertexy) / vertex
            }

            message.channel.send(`f(x) = ${a}(x - ${xV}) ^ 2 + ${yV} `)
        }

        xs(input[1], input[2], input[3], input[4])
    } else if (command == "corecharge") {
        function coreCharge(p, e) {
            let result = p - e
            message.channel.send(result)
        }

        coreCharge(input[1], input[2])
    } else if (command == "rp") {
        let chars = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "!", "@", "#", "$", "%", "&", "*", "?", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-", "+", "="]
        let psd = []
        let p
        //console.log(chars.length)
        function randPswd(limit) {
            for (let i = 1; i <= limit; i++) {
                p = Math.floor((Math.random() * chars.length) + 0)
                console.log(chars[p])
                psd.push(chars[p])
            }

            psd = psd.join("")

            message.channel.send(`||${psd}||`)
            console.log(`psd ${psd}`)
        }

        if (input[1] <= 30) {
            randPswd(input[1])
        } else {
            message.channel.send("please make the length less than 30")
        }


    }


    if (command == "quiz") {

        const quiz = [{
                "question": "which has lower inoization energy? Ne or Li",
                "answers": ["li", "Li"]
            },
            {
                "question": "which has higher elctronegtivity? Cl or Na",
                "answers": ["Cl", "cl"]
            },
            {
                "question": "which has higher elctronegtivity? O or Se",
                "answers": ["O", "o"]
            },
            {
                "question": "which has higher ionization energy? S or Al",
                "answers": ["S", "s"]
            },
            {
                "question": "which has lower elctronegtivity? Mg or B",
                "answers": ["Mg", "mg"]
            }
        ]

        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() == response.content.toLowerCase());
        }

        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                })

                .then(colelcted => {
                    
                    message.channel.send(`${colelcted.first().author} got the correct answer`)
                    console.log(colelcted.Collection.content)
                })


                .catch(colelcted => {
                    message.channel.send("looks like nobosy got the answer :(")
                })

        })
    }



    if (command == "pt") {
        try {
        client.commands.get("elements").execute(message, args)
        } catch (e) {

            
        }
    }
    // hamoud bot - by Arnav and Akarsh: 08/30/2020
    else if (command == "hamoud?") {
        let hamood = "hamoud.\n\n hamoud. \n\n\n hamoud..."
        let Hadid = "Hamoud   👏 Hadid   👏 Hamoud   👏 Hamoud   👏 Hadidi \n HAMOUD 👏 HADID 👏 HAMOUD 👏 HAMOUD 👏 HADIDI \n HAMOUD 👏 HADID 👏 HAMOUD 👏 HAMOUD 👏 HADIDI \n HAMOUD 👏 HADID 👏 HAMOUD 👏 HAMOUD 👏 HADIDI"
        let Hembed = new Discord.MessageEmbed()
            .setColor("#a9ca44")
            .setTitle("Return of Hamoud")
            .setDescription(`${hamood}\n\n\n\n\n ${Hadid}\n https://youtu.be/75BVT8tUtLk  `)
            .attachFiles(["../Discord/pictures/hamoud.png"])
            .setImage("attachment://hamoud.png")
        message.channel.send(Hembed)
    } else if (command == "wave") {
        function calc(x, condition) {
            let c = 3.00 * 10 ** 8


            if (condition == "wl") {
                let result = c / (x * 10 ** 14)
                let r = result * (Math.pow(10, 9) / 1)
                message.channel.send(`${r} nm`)
            } else if (condition == "fr") {

                if (x % 1 == 0) {
                    x = x / 100
                }

                
                let result = c / (x * Math.pow(10, -7))
                result = (result.toExponential()).toString().substring(0, 4) + ' * 10^14'

                message.channel.send(`${result}hz`)


            }
        }
        let op = parseFloat(input[1])
        let cond = input[2]
        calc(op, cond)

    } 

 if (command == "version" || command == "v") {
    message.channel.send("You are using Rtto Version 5.0!! This Version Contains the new Anti Corruption System (ACS) 2.0 and it will bring back an old feature...")
 }


 else if (command == "gcf") {
    function greatestCommonFactor(a,b) {
        var smallest;
        var factors = [];
        var gcf = 0;
        if (a > b) {
          smallest = b;
        } else if (a == b) {
          gcf = a;
        } else {
          smallest = a;
        }
        for(var i = 0; i <= smallest; i++) {
          if (a % i == 0 && b % i == 0) {
            factors.push(i);  
          }
        }
        for(var x = 0; x < factors.length; x++) {
          if (factors[x]> gcf) {
            gcf = factors[x];  
          }
        }
        message.channel.send(gcf);
      }

      greatestCommonFactor(parseInt(input[1]), parseInt(input[2]))
      
 }

 else if (command == "sum") {
     let sum = 0
     for (let i = 1; i<input.length; i++) {
         let num = parseInt(input[i]);
         sum += num
     }
     message.channel.send(`sum is ${sum}`);
     
 }

else if (command == "lcm") {
    function leastCommonMultiple(a,b){
        let smallest;
        let largest;
        let r;
        if (a > b) {
          smallest = b;
          largest = a;
        } else {
          smallest = a;
          largest = b;
        }
        console.log(`r: ${r}\n  Smal: ${smallest}\n LArge: ${largest}`)
        for ( r = smallest; r <= largest*smallest; r+=smallest) {
            console.log(`r: ${r}\n  Smal: ${smallest}\n LArge: ${largest}`)
          if (r % largest == 0) {
            break;
          }
        }
        message.channel.send(r);
      }

      leastCommonMultiple(parseInt(input[1]), parseInt(input[2]))
}

else if (command == "slav lang" || command == "slav" || command == "sl") {

    message.channel.send(`
    * **Official Slav Language** *
    **cyka** = b*tch
    **blyat** = offensive way to say prostitute/whore
    **gopnik** = we all know
    **urod** = freak/weirdo
    **debil** = retard
    **pizdec** = kinda like say "oh shit!!"
    **idi nahui** = frick off
    **gavno** = offensive way to say livestock`)
}
    

    if (command == "ver") {
        message.channel.send("hello new updates v 1.2")
    }
    else if (command == "tt") {
        message.channel.send(message.guild.id)
    }

    else if (command == "guess") {
        client.commands.get("guessing").execute(message, args)
    }

    else if (command == "info") {
        message.channel.send(`Otto Eduard Leopold, Prince of Bismarck, Duke of Lauenburg (born von Bismarck-Schönhausen; German: Otto Eduard Leopold Fürst[2] von Bismarck, Herzog zu Lauenburg; 1 April 1815 – 30 July 1898), known as Otto von Bismarck (German: [ˈɔto fɔn ˈbɪsmaʁk] (About this soundlisten)), was a conservative German statesman who masterminded the unification of Germany in 1871 and served as its first chancellor until 1890, in which capacity he dominated European affairs for two decades. He had previously been Minister President of Prussia (1862–1890) and Chancellor of the North German Confederation (1867–1871). He provoked three short, decisive wars, against Denmark, Austria, and France. Following the victory against Austria, he abolished the supranational German Confederation and instead formed the North German Confederation as the first German national state, aligning the smaller North German states behind Prussia, and excluding Austria. Receiving the support of the independent South German states in the Confederation's defeat of France, he formed the German Empire – which also excluded Austria – and united Germany.`)
    }

    else if (command == "rect") {
        client.commands.get("reactions").execute(message,args)
    }
    else if(command == "emo") {
        message.channel.send("<:kek:1008803614774546573>")

    }
    

    // if(args.content == "kek") {
    //     args.reply("KEK")
    // }

//     // QB 10-8-2020

//  // _________________TOTALs_________________

// // let totalme = []
//  //let totalthey = []

//     function totals () {
//         let tm = 0;
//         let tt = 0;

//         // my total
//         for (let i = 0; i <= totalme.length-1; i++) {
//             tm += totalme[i]
//         }

//         // They Total
//         for (let i = 0; i <= totalthey.length-1; i++) {
//            tt += totalthey[i]
//        }

//        message.channel.send(`Our total: ${tm} \nTheir total: ${tt}`);
//     }


//      // ____________Tosssups__________
//      function tossup(a, b) {
//         // IF we get power
//         if ((a == "15" || a == "p") && (b == "m" || b == "me")) {
//             totalme.push(15)
//             console.log(totalme)
//             message.channel.send("We got a tossup (15 points)")
//         }

//         // If they get power
//         else if ((a == "15" || a == "p") && (b == "t" || b == "them")) {
//            totalthey.push(15)
//            console.log(totalthey)
//            message.channel.send("They got a power (15 points)")
//        }
       
//        // If we get tossup
//        else if ((a == "10" || a == "t") && (b == "m" || b == "me")) {
//            totalme.push(10)
//            console.log(totalme)
//            message.channel.send("We got a tossup (10 points)")
//        }

//        // If they get tossup
//        else if ((a == "10" || a == "t") && (b == "t" || b == "them")) {
//            totalthey.push(10)
//            console.log(totalthey)
//            message.channel.send("They got a tossup (10 points)")
//        }

//        // If we Neg
//        else if ((a == "-5" || a == "n") && (b == "m" || b == "me")) {
//             totalme.push(-5)
//             console.log(totalme)
//             message.channel.send("We Lost 5 points")
//     }

//        // If They Neg
//        else if ((a == "-5" || a == "n") && (b == "t" || b == "them")) {
//             totalthey.push(-5)
//             console.log(totalthey)
//             message.channel.send("They Lost 5 points")
//     }
//     }

//     // _______BONUS_____________
//     function bonus (limit, team) {
//         let bt = []
//         let b = 10
//         let sum = 0

//         if (limit != 0 && limit < 4) {
//              for(let i = 1; i <= limit; i++) {
//                  bt.push(b);
//              } 

//              for (let i = 0; i<= bt.length-1; i++) {
//                  sum += bt[i]
//              }
//              if (team == "me" || team == "m") {
//                  message.channel.send(`We got ${sum} points on the bonuses`)
//              }

//               else if (team == "them" || team == "t") {
//                 message.channel.send(`They got ${sum} points on the bonuses`)
//             }
//              console.log(sum)
             
//         }

//         if (team == "m" || team == "me") {
//             totalme.push(sum)
//         } else if (team == "t" || team == "team") {
//             totalthey.push(sum)
//         }
        
//         return sum;
//     }

//     //12- 18-2020

//     function Undo(side) {
//         if (side == "t" || side == "them") {
//             message.channel.send(`${totalthey[totalthey.length-1]} was undone!!`)
//             totalthey.pop()
            
//         }
//         else if (side == "m" || side == "my") {
//             message.channel.send(`${totalme[totalme.length-1]} was undone!!`)
//             totalme.pop()
//         }
//     }
//     // _________________________

//      if (command == "qb") {
        
//          if (input[1] == "total" || input[1] == "s") {
//             totals();
//          }
//          // Resets Scores
//          else if (input[1] == "reset" || input[1] == "r") {
//              totalme = [];
//              totalthey = [];
//              message.channel.send("Points have been reset!");
//          } 
//          else if (input[1] == "help" || input[1] == "h") {
             
//             let coms = ["-qb a b you must use -qb for every tossup.", "The arguemnt a refers if the tossup was a power or a tossup or neg (p , n, t)","The arguemnt b refers to if you or the otther team got a tossup, me or them (m, t)", " examples: -qb t t == they got a tossup"," -qb p m we got a power"]
//             let bcoms = ["use -b for all bonuses", "-b a b", "argument a takes in how many questios in the bonuese they got right so 1, 2 or 3", "arguement b declares who got the bonus (t, m)"]
//             let scom = "for the total u can do -qb s"
//             let comsmsg = new Discord.MessageEmbed()
//                 .setColor("#236fgh")
//                 .setDescription(`
//                             **QB Bot Commands**

//                             For Tossups:

//                             ${coms[0]}\n
//                             ${coms[1]}\n
//                             ${coms[2]}\n
//                             ${coms[3]}\n
//                             ${coms[4]}\n
// ------------------------------------------------------------------------

//                             For Bonuses:

//                             ${bcoms[0]}\n
//                             ${bcoms[1]}\n
//                             ${bcoms[2]}\n
//                             ${bcoms[3]}\n


//                             For the total:
                            
//                             ${scom}
    
//                 `);

//                 message.channel.send(comsmsg)
//          }
        

//          tossup(input[1], input[2]);
             
//      } 
     
     
//      else if (command == "b") {
//          bonus(input[1], input[2]);
         
//      } else if (command == "undo") {
//          Undo(input[1])

//      };






// NEW QB 12-22-2020

// Creates new text channel / server slot

// Important functions 12-22- 2020

let doc = fs.readFileSync("scores.json")
        let code = doc.toString()
        let jsondata = JSON.parse(code)


function NewServer (id) {
    let obj = {
            "server": message.guild.name,
            "channel": message.channel.name,
            "id" : id,
            "myteam": {
                "tossups": {
                    "TU": 0,
                    "P" : 0,
                    "N" : 0
                },
                "bonuses" : 0,
                "logs": [],
                "undo": 0,
                "people": [],
                
            },
            "theirteam": {
                "tossups": {
                    "TU": 0,
                    "P" : 0,
                    "N" : 0,
                },
                "bonuses" : 0,
                "logs": [],
                "undo": 0,
            }
        
        
    }

    jsondata.push(obj)
    //console.log(scores)
    console.log("RECORDED!!")

    update(jsondata,fs)


}
    
function update (code, fs) {
    let toJSON = JSON.stringify(code,null,2)
    fs.writeFileSync("scores.json", toJSON)
}

function check (id) {
    let checker = 0
    for (let i = 0; i < jsondata.length; i++ ) {
        if (jsondata[i].id == id) {
            checker = 1
            console.log("ALREADY IN MEMORY")
            break
        } 
    }

    if (checker == 0) {
        NewServer(id)
    }
}

function confirm (id) {
    let index = jsondata.findIndex( k => k.id == id)

    return index
}

// _____________________________________________________________

// Tossups, Bonuses, and Basic Functions 12-22-2020


function tossup(a, b, id, c="WE") {
    let index = confirm(id)
    let arr = jsondata[index].myteam.people
    let nm;
    if (c != "WE") {
     nm = checkPerson(c, id)
    }

    

    if ((a == "15" || a == "p") && (b == "me" || b == "m")) {
        if (c != "WE") {
        arr[nm].P += 15
        update(jsondata,fs)

        message.channel.send(`${c} got 15 points`)
        }

        jsondata[index].myteam.tossups.P += 15
         console.log(jsondata[index].myteam.tossups.P)
         jsondata[index].myteam.logs.push(` ${c}: 15`)
         update(jsondata,fs)
        message.channel.send("We got a power (15 points)")
        

       

    }

    else if ((a == "15" || a == "p") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.P += 15
         console.log(jsondata[index].theirteam.tossups.P)
         jsondata[index].theirteam.logs.push(15)
         update(jsondata,fs)
        message.channel.send("They got a power (15 points)")
    }

    else if ((a == "10" || a == "t") && (b == "me" || b == "m")) {
        if (c != "WE") {
        arr[nm].TU += 10
        update(jsondata,fs)

        message.channel.send(`${c} got 10 points `)
        }

        jsondata[index].myteam.tossups.TU += 10
         console.log(jsondata[index].myteam.tossups.TU)
         jsondata[index].myteam.logs.push(` ${c}: 10`)
         update(jsondata,fs)
        message.channel.send("We got a tossup (10 points)")
    }

    else if ((a == "10" || a == "t") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.TU += 10
         console.log(jsondata[index].theirteam.tossups.TU)
         jsondata[index].theirteam.logs.push(10)
         update(jsondata,fs)
        message.channel.send("They got a tossup (10 points)")
    }
    else if ((a == "-5" || a == "n") && (b == "me" || b == "m")) {
        if (c != "WE") {
        arr[nm].N -= 5
        update(jsondata,fs)

        message.channel.send(`${c} got-5 points`)
        }

        jsondata[index].myteam.tossups.N -= 5
         console.log(jsondata[index].myteam.tossups.N)
         jsondata[index].myteam.logs.push(` ${c}: -5`)
         update(jsondata,fs)
        message.channel.send("We Lost 5 points")
    }
    else if ((a == "-5" || a == "n") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.N -= 5
         console.log(jsondata[index].theirteam.tossups.N)
         jsondata[index].theirteam.logs.push(-5)
         update(jsondata,fs)
        message.channel.send("They Lost 5 points")
    }

    console.log(arr)
   
}

function bonuses (limit, team, id) {
    let index = confirm(id)

    if ((limit == 3 || limit == 30) && (team == "m" || team == "me")) {
        jsondata[index].myteam.bonuses += 30
        console.log(jsondata[index].myteam.bonuses)
        jsondata[index].myteam.logs.push(30)
        update(jsondata,fs)
        message.channel.send("We got 30 points")

    } 
    else if ((limit == 3 || limit == 30)&& (team == "t" || team == "them")) {
        jsondata[index].theirteam.bonuses += 30
        console.log(jsondata[index].theirteam.bonuses)
        jsondata[index].theirteam.logs.push(30)
        update(jsondata,fs)
        message.channel.send("They got 30 points")

    }
    else if ((limit == 2 || limit == 20) && (team == "m" || team == "me")) {
        jsondata[index].myteam.bonuses += 20
        console.log(jsondata[index].myteam.bonuses)
        jsondata[index].myteam.logs.push(20)
        update(jsondata,fs)
        message.channel.send("We got 20 points")

    }

    else if ((limit == 2 || limit == 20) && (team == "t" || team == "them")) {
        jsondata[index].theirteam.bonuses += 20
        console.log(jsondata[index].theirteam.bonuses)
        jsondata[index].theirteam.logs.push(20)
        update(jsondata,fs)
        message.channel.send("They got 20 points")

    }

    else if ((limit == 1 || limit == 10)&& (team == "m" || team == "me")) {
        jsondata[index].myteam.bonuses += 10
        console.log(jsondata[index].myteam.bonuses)
        jsondata[index].myteam.logs.push(10)
        update(jsondata,fs)
        message.channel.send("We got 10 points")

    }

    else if((limit == 1 || limit == 10) && (team == "t" || team == "them")) {
        jsondata[index].theirteam.bonuses += 10
        console.log(jsondata[index].theirteam.bonuses)
        jsondata[index].theirteam.logs.push(10)
        update(jsondata,fs)
        message.channel.send("They got 10 points")

    }

}



function sum (t, id) {
    let index = confirm(id)
    if (t == "m") {
        return jsondata[index].myteam.tossups.TU + jsondata[index].myteam.tossups.P + jsondata[index].myteam.bonuses + jsondata[index].myteam.tossups.N
    } else if (t == "t") {
        return jsondata[index].theirteam.tossups.TU + jsondata[index].theirteam.tossups.P + jsondata[index].theirteam.bonuses + jsondata[index].theirteam.tossups.N
    }
}

function total (id) {
    let index = confirm(id)
    let myscore = sum("m", id)
    let theirscore = sum("t", id)

    let totals = new Discord.MessageEmbed()
                        .setColor("#236fgh")
                        .setDescription(`Our Points:\n 
                        Powers: ${jsondata[index].myteam.tossups.P / 15} \n
                        Tossups: ${jsondata[index].myteam.tossups.TU / 10} \n
                        Negs: ${jsondata[index].myteam.tossups.N / -5} \n
                        Bonuses: ${jsondata[index].myteam.bonuses / 10} \n \n
                        \n
                        ---------------------------------

                        Their Points:\n
                        Powers: ${jsondata[index].theirteam.tossups.P / 15} \n
                        Tossups: ${jsondata[index].theirteam.tossups.TU / 10} \n
                        Negs: ${jsondata[index].theirteam.tossups.N / -5} \n
                        Bonuses: ${jsondata[index].theirteam.bonuses / 10}\n \n
                        \n
                        ----------------------------------

                        Totals:\n
                        Our Total: ${myscore}\n
                        Their Total: ${theirscore}`)

    

    
    //message.channel.send(`Our Score: ${myscore}\n Their Score: ${theirscore}`)

    message.channel.send(totals)

}

function reset (id) {
    let index = confirm(id)

    jsondata[index].myteam.tossups.P = 0
    jsondata[index].myteam.tossups.TU = 0
    jsondata[index].myteam.tossups.N = 0
    jsondata[index].myteam.bonuses = 0
    jsondata[index].myteam.logs = []

    jsondata[index].theirteam.tossups.P = 0
    jsondata[index].theirteam.tossups.TU = 0
    jsondata[index].theirteam.tossups.N = 0
    jsondata[index].theirteam.bonuses = 0
    jsondata[index].theirteam.logs = []

    update(jsondata,fs)

    message.channel.send("All Points Have Been Reset !")

}

function Logs (id) {
    let index = confirm(id)
    
    let myLog = jsondata[index].myteam.logs

    let theirLog= jsondata[index].theirteam.logs

    message.channel.send(`\n
    EMERGENCY PROTOCOL\n
    LOGS:\n
    OUR TEAM: ${myLog}\n 
    OTHER TEAM: ${theirLog}`)

    
}

// _____________________________________________________


// UNDOING 12-25-2020 -- 12-26-2020

function undo (a, b, id) {
    let index = confirm(id)
    


    if ((a == "15" || a == "p") && (b == "me" || b == "m")) {
        jsondata[index].myteam.tossups.P -= 15
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 15 points for our team!")
    }

    else if ((a == "15" || a == "p") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.P -= 15
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 15 points for their team!")
    }

    else if ((a == "10" || a == "t") && (b == "me" || b == "m")) {
        jsondata[index].myteam.tossups.TU -= 10
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 10 points for our team!")
    }

    else if ((a == "10" || a == "t") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.P -= 10
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 15 points for their team!")
    }
    else if ((a == "-5" || a == "n") && (b == "me" || b == "m")) {
        jsondata[index].myteam.tossups.N += 5
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid -5 points for our team!")
       
    }
    else if ((a == "-5" || a == "n") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.tossups.N += 5
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid -5 points for their team!")
       
    }

    else if ((a == "3" || a == "30") && (b == "me" || b == "m")) {
        jsondata[index].myteam.bonuses -= 30
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 30 points for our team!")
       
    }

    else if ((a == "3" || a == "30") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.bonuses -= 30
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 30 points for their team!")
       
    }

    else if ((a == "2" || a == "20") && (b == "me" || b == "m")) {
        jsondata[index].myteam.bonuses -= 20 
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 20 points for our team!")
       
    }

    else if ((a == "2" || a == "20") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.bonuses -= 20
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 20 points for their team!")
       
    }

    else if ((a == "1" || a == "10") && (b == "me" || b == "m")) {
        jsondata[index].myteam.bonuses -= 10
        jsondata[index].myteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 10 points for our team!")
       
    }

    else if ((a == "1" || a == "10") && (b == "them" || b == "t")) {
        jsondata[index].theirteam.bonuses -= 10
        jsondata[index].theirteam.logs.pop()
        update(jsondata,fs)

        message.channel.send("Undid 10 points for their team!")
       
    }
    
}


// _____________________________________________________________


// Induvidual scores 12-27 - 2020 -- 12-28-2020


function newPerson (name, id) {
    let index = confirm(id)
    let person = {
        "name": name,
        "TU": 0,
        "P": 0,
        "N": 0

    }
    jsondata[index].myteam.people.push(person)
}

function addPerson (name,id) {
    let index = confirm(id)

    newPerson(name, id)
    update(jsondata,fs)

    message.channel.send(`${name} has been added`)

    console.log(jsondata[index].myteam.people)
}

function checkPerson (name, id) {
    let index = confirm(id)
    let arr = jsondata[index].myteam.people
    let el = arr.findIndex( k => k.name == name)

   // console.log("element " + el)

    return el
    
}

function induvidualScore(id) {
    let index = confirm(id)
    let arr = jsondata[index].myteam.people

    if (arr.length <= 0) {
        message.channel.send("No inudviduals")
    } else  {

        for (let i = 0; i< arr.length; i++) {
            message.channel.send(`${arr[i].name.toUpperCase()}:\n   P:  ${arr[i].P / 15}    TU:  ${arr[i].TU / 10}    N:  ${arr[i].N / -5}`)
        }
    }
}

function removePlayer(name, id) {
    let index = confirm(id)
    let arr = jsondata[index].myteam.people
    let nm = checkPerson(name, id)
    let newArr = []

    if (name == "everyone" || name == "e" || name == "a" || name == "all") {
        jsondata[index].myteam.people = []
        update(jsondata,fs)
        
        message.channel.send("Everyone has ben removed!")
        
    } else {

    arr.filter(el => {
        if (el.name != name) {
             newArr.push(el)
        }
    })

    jsondata[index].myteam.people = newArr
    update(jsondata,fs)

    message.channel.send(`${name} has been removed!`)
    }

   
}

function undoInduvidualPoints (p, name, id) {
    let index = confirm(id)
    let arr = jsondata[index].myteam.people
    let nm = checkPerson(name, id)

    if (p == "15" || p == "p") {
        arr[nm].P -= 15
        update(jsondata,fs)

        message.channel.send(`Undid 15 points for ${name}`)
    }

    else if (p == "10" || p == "t") {
        arr[nm].TU -= 10
        update(jsondata,fs)

        message.channel.send(`Undid 10 points for ${name}`)
    }

    else if (p == "-5" || p == "n") {
        arr[nm].N += 5
        update(jsondata,fs)

        message.channel.send(`Undid -5 points for ${name}`)
    }
 }

 // ________________________________________________________________

 // COMMANDs

if (command == "qb") {
    let serverId = message.channel.id
    

    //console.log(serverId)
    console.log("length " + scores.length)

    check(serverId)

    tossup(input[1], input[2], serverId, input[3])


    if (input[1] == "s") {
       total(serverId)
    }

    else if (input[1] == "r") {
        reset(serverId)
    }

    else if (input[1] == "undo") {
        console.log(input[2] + " " + input[3])
        undo(input[2], input[3], serverId)
    }

    else if (input[1] == "log" || input[1] == "logs") {
        Logs(serverId)
    }

    else if (input[1] == "add") {
        addPerson(input[2], serverId)
    }

    else if (input[1] == "is") {
        induvidualScore(serverId)
    }

    else if (input[1] == "remove") {
        removePlayer(input[2], serverId)
    }

    else if (input[1] == "iundo" || input[1] == "iu") {
        undoInduvidualPoints(input[2], input[3], serverId)
    }



    else if (input[1] == "help" || input[1] == "h") {
             
                    let coms = ["-qb a b you must use -qb for every tossup.", "The arguemnt a refers if the tossup was a power or a tossup or neg (p , n, t)","The arguemnt b refers to if you or the otther team got a tossup, me or them (m, t)", " examples: -qb t t == they got a tossup"," -qb p m we got a power"]
                    let bcoms = ["use -b for all bonuses", "-b a b", "argument a takes in how many questios in the bonuese they got right so 1, 2 or 3", "arguement b declares who got the bonus (t, m)"]
                    let scom = "for the total u can do -qb s"
                    let comsmsg = new Discord.MessageEmbed()
                        .setColor("#236fgh")
                        .setDescription(`
                                    **QB Bot Commands**
        
                                    For Tossups:
        
                                    ${coms[0]}\n
                                    ${coms[1]}\n
                                    ${coms[2]}\n
                                    ${coms[3]}\n
                                    ${coms[4]}\n
        ------------------------------------------------------------------------
        
                                    For Bonuses:
        
                                    ${bcoms[0]}\n
                                    ${bcoms[1]}\n
                                    ${bcoms[2]}\n
                                    ${bcoms[3]}\n
        
        
                                    For the total:
                                    
                                    ${scom}
            
                        `);
        
                        message.channel.send(comsmsg)
        

    
    }
}

else if (command == "b") {
    let serverId = message.channel.id
    console.log(serverId)
    check(serverId)
    bonuses(input[1], input[2], serverId)
}

// console.log(message.author)

// if (message.author.username == "shogun169") {
//     //message.author.kick("Bullying the Bot")
// }

// if (message.author.username == "LeBronistheGOAT") {
//     message.member.kick("noob")
//     message.channel.send("ADAADA MOMENTUM")
// }

// if (message.author.username == "mooo 2.0") {
//     message.member.kick("noob")
//     message.channel.send(`<@${message.author.id}> has been terminated for hurting my feelings :) ;) `)
    
// }



// SCIENCE BOWL 1-11-2021

// function newSBTextChannel (id) {
//     let obj = {
//             "id" : id,
//            "Team1": {
//                 "tossups": 0,
//                 "bonuses": 0
//            },
//            "TotalScore": function () {
//                return this.Team1.tossups + this.Team1.bonuses
//            }
        
//     }

//     sbScores.push(obj)
//     //console.log(scores)
//     console.log("SBBB RECORDED!!")
// }

// function checkSB (id) {
//     let checker = 0

//     for (let i = 0; i < sbScores.length; i++ ) {
//         if (sbScores[i].id == id) {
//             checker = 1
//             console.log("SBB ALREADY IN MEMORY")
//             break
//         } 
//     }

//     if (checker == 0) {
//         newSBTextChannel(id)
//     }
// }

// function confirmSB (id) {
//     let index = sbScores.findIndex( k => k.id == id)

//     return index
// }


// function totalSB ( id) {
//     let index =  confirmSB(id)
//     let scores = sbScores[index].TotalScore()

//     //console.log(scores)

//     message.channel.send(`TEAM TOTAL: \n ${scores}`)
// }

// function sbTossups(a, id) {
//     let index = confirmSB(id)

//     if (a == "4" || a == "t") {
//         sbScores[index].Team1.tossups += 4
//         message.channel.send("YOU GOT 4 POINTS")
//     }

//     else if (a == "10" || a == "b") {
//         sbScores[index].Team1.bonuses += 10
//         message.channel.send("YOU GOT 10 POINTS")
//     }
// }

// function resetSB (id) {
//     let index = confirmSB(id)
//     sbScores[index].Team1.tossups = 0
//     sbScores[index].Team1.bonuses = 0
//     message.channel.send("ALL POINTS RESET !")
// }

// if (command == "sb") {
//     let channelId = message.channel.id

//     checkSB(channelId)
//     sbTossups(input[1], channelId)

//     console.log(sbScores)
//     //console.log(channelId)



//     if (input[1] == "s") {
//         totalSB(channelId)
//     }
//     else if (input[1] == "r") {
//         resetSB(channelId)
//     } else if (input[1] == "h" || input) {}

    


// if (message.content.startsWith("say")) {
//     message.delete(1000); //Supposed to delete message
//     //message.channel.send(message.content.slice(5, message.content.length));
//  }

if (command == "debil") {
    async function kek () {
    let vick = await client.users.fetch("439546060642320384")
    let arnav = await client.users.fetch("303279285219622914")

   

        try {
        vick.send("<@!439546060642320384> kek")
        }
        catch (err) {
            console.log(err)
        }

    }
    kek()
}

if (command == "fun") {
    async function kek () {
        let victim =  message.author.id
        victim = await client.users.fetch(victim)
        console.log(victim)

       victim.send("kek")
    
    }
        kek()
   
}

// 12/13/2021
if (command == "dec") {

    Decimal(input[1]);

    function Decimal (num) {
        let actNums = []
        let numbers = numify(num).reverse();
        for (let i = 0; i<numbers.length; i++) {
            if (numbers[i] !== 0) {
                actNums.push(2**i);
            }
        }
    
        message.channel.send(sum(actNums));
    }
    
    function numify (num) {
        let arr = num.toString().split("");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        return arr;
    }
    
    function sum (list) {
        let sum = 0;
        for (let i = 0; i<list.length; i++) {
            sum += list[i];
        }
        return sum;
    }
}

if (command == "bin") {
    let exp = 0
    function Binary (num) {
        if (num != 0) {
            let len = binRange(num);
            let temp = []
            let binary = binNums(len-1, num, temp);
            binary = filler(binary, len)
            binary = binary.join("");
            message.channel.send(binary);
        } else {
            message.channel.send(0);
        }
    
    }
    
    
    function binRange (num) {
        if (num < 2**exp) {
            return exp;
        } 
        if (num == 2**exp) {
            return exp+1;
        }
        else {
            exp++
            return binRange(num);
        }
    }
    
    
    function binNums (len, num, a) {
        
    
        if (2**len > num) {
            a.push(0);
        }
        if (2**len <= num) {
            num = num - 2**len;
            a.push(1)
        } 
        if (num == 0) {
            return a;
        }
        len--
        return binNums(len, num, a)
    }
    
    function filler (list, len) {
        if (list.length == len) {
            return list;
        } 
        if (list.length < len) {
            list.push(0)
        }
        return filler(list, len)
    }

    Binary(parseInt(input[1]))
}

if (command == "money") {
    client.commands.get("money").execute(message, args);
}

if (command == "dollars") {
    client.commands.get("dollars").execute(message, args);
}

//7/5/2022

if (command == "stocks") {
    client.commands.get("stocks").execute(message, args);
}

if (command == "start") {
    client.commands.get("moneyUP").execute(message, args);
}

if (command == "dm") {
    let content = input.slice(2)
    async function kek () {
        let str = input[1]
        let chars = []
        for (let i = 0; i < str.length; i++) {
           
        }
       

        console.log("DM: " + dm)
        try {
            console.log(message.author.id)
        let victim = await client.users.fetch(message.author.id)
        console.log(victim)

       victim.send(content)

        }

        catch(err) {
            console.log(err)
        }
    
    }
        kek()


}


function malware (person, fs) {
    console.log("command")
    let doc = fs.readFileSync("malware.json")
        let code = doc.toString()
        let jsondata = JSON.parse(code)
        let checker = 0

        for(let i = 0; i < jsondata.length; i++) {
            if (jsondata[i].username == person.username || jsondata[i].discriminator == person.discriminator) {
                checker ++
            }
        }

        if (checker == 0) {

        jsondata.push(person)

        updateMalware(jsondata, fs)
        }
}

function updateMalware (code, fs) {
    let toJSON = JSON.stringify(code,null,2)
    fs.writeFileSync("malware.json", toJSON)
}  

try {
    if (message.guild.id == "689990682714046464" || message.guild.id == "594905154332131329") {
        malware(message.author, fs)
    }
}

catch (err) {
    console.log("DMS")
}

if (command == "malware" && message.guild.id != "689990682714046464" && message.guild.id != "594905154332131329") {
    client.commands.get("malware").execute(message, args);
}

if (command == "rasp") {
    async function kek () {
        let victim =  "590420469862236160"
        victim = await client.users.fetch(victim)
        console.log(victim)

       victim.send("kek")
    


    }
    kek()
}

if (command == "sc") {
    let doc = fs.readFileSync("ids.json")
    let code = doc.toString()
    let jsondata = JSON.parse(code)

    let server = message.guild.name
    let name = message.channel.name
    let cid = message.channel.id

    if (input[1] == "add") {
        

        

        console.log(`srver: ${server}\n name: ${name}\n id: ${cid}`);

        let obj = {
            "server": server,
            "name": name,
            "id": cid

        }

        let time = converter(2)


        
        checkIds(obj)
        setInterval(function sendMsgs () {
            for (let i = 0; i < jsondata.length; i++ ) {
                //console.log(jsondata[i].id)
                client.channels.cache.get(jsondata[i].id).send("j")
            }
        }, time) 
    




        // Functions --------------


        function checkIds (obj) {
            let checker = 0
            for (let i = 0; i <  jsondata.length; i++) {
                if(jsondata[i].id == cid) {
                    checker ++
                }
            }

            if (checker == 0) {
                jsondata.push(obj);
                updateIds(jsondata,fs)
            }
        }

        function converter (t) {
            s = 1000
            m = s * 60
            h = m * 60

            return h * t
        }
    }

    else if (input[1] == "del") {
        console.log("deleted")
        Delete()
    }



    function Delete (id) {
       let ind = index(id)
       jsondata.splice(ind,1)
       updateIds(jsondata,fs)
    }

    function updateIds (code, fs) {
        let toJSON = JSON.stringify(code,null,2)
        fs.writeFileSync("ids.json", toJSON)
    } 

    function index (id) {
        let index = jsondata.findIndex( k => k.id == id)
    
        return index
    }

    

    

}


// Uno




});
} catch (err) {
    
}



client.off("message", message => {

    message.channel.send("Bot Offline")

});
        

client.login(token);
