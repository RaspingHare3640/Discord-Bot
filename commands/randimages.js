// 7-8-2020
// Updayed 4-20-2021

module.exports = {
    name: "randimage",
    description: "This is a random images command!",
    execute(message, args) {
            console.log("sussy")
        let request = require("request");
        let cheerio = require("cheerio");
        const fs = require("fs")
        let category = require("../index.js").join(" ")
        let checker = 0
        let control = 0

        function search (category) {
            let doc = fs.readFileSync("history.json")
            let code = doc.toString()
            let jsondata = JSON.parse(code)
            let check = 0

            for (let i =0; i< jsondata.length; i++) {
                if (jsondata[i].name == message.author.username) {
                    check++
                }
            }



            let obj = {
                name: message.author.username,
                searches: [],
            }

            if (check == 0) {

            jsondata.push(obj)
            update(jsondata)
            }

        }

        function update(code) {
            let toJSON = JSON.stringify(code,null,2)
            fs.writeFileSync("history.json", toJSON)
        }

        
        
        
        
        async function image (message, category) {
            console.log("running")
            let options = {
                url: "https://results.dogpile.com/serp?qc=images&q=" + category,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            
            // let options = {
            //     url: "https://www.google.com/search?q="+ category + "&tbm=isch&sxsrf=ALiCzsZVQVt4tm9LmpXRRsevg1TF4NsfAQ%3A1656637649385&source=hp&biw=1920&bih=961&ei=0Ui-YuyKEZadkPIPodaWuAo&iflsig=AJiK0e8AAAAAYr5W4VTf6oZE7VpQR0PsYxi3P8X15I9A&ved=0ahUKEwist-2UwNb4AhWWDkQIHSGrBacQ4dUDCAc&uact=5&oq=potato&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQM6BwgjEOoCECc6BAgjECc6CAgAELEDEIMBOgUIABCABFDvBViTDGDYDWgBcAB4AIAB3ASIAasPkgEFNC0zLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCg&sclient=img#imgrc=z5dW2JacAusMOM",
            //     method: "GET",
            //     headers: {
            //         "Accept": "text/html",
            //         "User-Agent": "Chrome"
            //     }
            // };
            // request("")
        
            // request(options, function (error, response, responseBody) {
            //     if(error) {
            //         console.log(error)
            //         return
            //     }
                
            //     // console.log(response)

            //     $ = cheerio.load(responseBody);
                
            //     // console.log($)
            //     // let links = $(".image a.link");
            //     let links = $(".image a.link");
            //     console.log(links.attr("href"))
        
            //     let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
            //     console.log(urls);
            //     if (!urls.length) {
        
            //         return
            //     }
        
            //     message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            // });
        
            const axios = require("axios")

            axios.get(options.url)
            .then(function(response) {
                return response.text();
            }).then(function (html) {
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, "text/html")

                let images = doc.querySelectorAll(".image")
                console.log("images")
            }).catch(function(err) {
                console.log(err)
            })
        }

        image(message, category)

        search(category)

        //UpdateSearch(category, fs, message)

        function UpdateSearch (category) {
            let doc = fs.readFileSync("history.json")
            let code = doc.toString()
            let jsondata = JSON.parse(code)

            let dt = new Date()

        
            for (let i =0; i< jsondata.length; i++) {
                if (jsondata[i].name == message.author.username) {
                    let mins = dt.getMinutes()
                    let hours = dt.getHours()
                    let day = dt.getDay()
                    let month = dt.getMonth()
                    let mdays = dt.getDate()
                    let rDay;
                    let rMonth;

                    if (day == 0) {
                        rDay = "Sunday"
                    }
                    if (day == 1) {
                        rDay = "Monday"
                    }
                    if (day == 2) {
                        rDay = "Tuesday"
                    }
                    if (day == 3) {
                        rDay = "Wednesday"
                    }
                    if (day == 4) {
                        rDay = "Thursday"
                    }
                    if (day == 5) {
                        rDay = "Friday"
                    }
                    if (day == 6) {
                        rDay = "Saturday"
                    }

                    if (month == "0") {
                        rMonth = "January"
                    }
                    if (month == "1") {
                        rMonth = "February"
                    }
                    if (month == "2") {
                        rMonth = "March"
                    }
                    if (month == "3") {
                        rMonth = "April"
                    }
                    if (month == "4") {
                        rMonth = "May"
                    }
                    if (month == "5") {
                        rMonth = "June"
                    }
                    if (month == "6") {
                        rMonth = "July"
                    }
                    if (month == "7") {
                        rMonth = "August"
                    }
                    if (month == "8") {
                        rMonth = "September"
                    }
                    if (month == "9") {
                        rMonth = "October"
                    }
                    if (month == "10") {
                        rMonth = "November"
                    }
                    if (month == "11") {
                        rMonth = "December"
                    }

                    let index = person(message.author.username, jsondata)
                    let ct;

                    console.log("Index: " + index)

                         ct = cat(category, index, jsondata)

                         console.log(jsondata[index].searches.length)


                    
                    let num = 0

                    let msg = {"content": category, "dates": [`${hours}:${mins}  ${rDay} ${rMonth} ${mdays}`], "counter": 1}


                    if (ct != -1) {
                    
                    jsondata[index].searches[ct].counter = jsondata[index].searches[ct].counter + 1
                    jsondata[index].searches[ct].dates.push(`${hours}:${mins}  ${rDay} ${rMonth} ${mdays}`)
                    }

                    if (ct == -1) {
                        jsondata[index].searches.push(msg)
                    }

        
                    update(jsondata)
                }
            }
        
        
        }

        function person(name, jsondata) {
            let index = jsondata.findIndex( k => k.name == name)

             return index
        }

        function cat (cat, i, jsondata) {
            let index = jsondata[i].searches.findIndex( k => k.content == cat)

             return index
        }
    }
    
}




