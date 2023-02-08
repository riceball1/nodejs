const https = require('https')
const fs = require('fs')

const url = "https://en.wikipedia.org/wiki/Turkish_language";

const request = https.get(url, res => {
    let download = fs.createWriteStream("turkish-lang2.html");
    console.log("Response started!")
    res.pipe(download)

    res.on("end", () => {
        console.log("Response finished")
    })
})

request.end()