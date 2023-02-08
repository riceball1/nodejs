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
    })
})

request.end()