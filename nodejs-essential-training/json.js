// create a json server
const { stat } = require('fs');
const { createServer } = require('http')


const catsData = [
    {"name": "Biscuit", "age": 3, "vibe": "cool"},
    {"name": "Jungle", "age": 12, "vibe": "savvy"}
]


createServer((req, res) => {
    const statusCode = 200;
    res.writeHead(statusCode, {"Content-Type": "text/json"})

    if (req.url.toLowerCase() === "/biscuit") {
        const biscuit = catsData.filter((cat) => cat.name === "Biscuit")
        res.end(JSON.stringify(biscuit))
    } else if (req.url.toLowerCase() === "/jungle") {
        const jungle = catsData.filter((cat) => cat.name === "Jungle")
        res.end(JSON.stringify(jungle))
    } else {
        res.end(JSON.stringify(catsData))
    }


}).listen(3000)