// create server 
const {createServer} = require('http')

const PORT = 3000
createServer((req, res) => {
    // req.method, req.url
    const statusCode = 200
    res.writeHead(statusCode, {"Content-Type": "text/html"})
    // res.end("Hello World");
    // server HTML text
    res.end(`
    <!DOCTYPE html>
    <html>
        <body>
            <h1>Serving HTML Text</h1>
        </body>
    </html>
    
    `)

}).listen(PORT)

console.log(`web server is listening on port ${PORT}`)