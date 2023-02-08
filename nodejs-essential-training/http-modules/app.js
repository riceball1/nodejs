const https = require('https')
const fs = require('fs')

const options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Turkish_language",
    method: "GET"
};

const request = https.request(options, (res, err) => {

    if(err) {
        console.error(err)
        throw new Error(err)
    }

    let responseBody = "";
    res.setEncoding("UTF-8")
    res.on("data", chunk => {
        console.log("--chunk", chunk.length)
        responseBody += chunk;
    });

    // write to a file
    res.on("end", () => {
        fs.writeFile("turkish-language.html", responseBody, err => {
            if (err) {
                throw err;
            }
            console.log("File downloaded")
        } )
    })
})

request.end()