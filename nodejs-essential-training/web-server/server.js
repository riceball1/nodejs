import express from 'express';
import skiTerms from './ski-terms.json' assert {type: "json"};
import bodyParser from 'body-parser'
import fs from 'fs';


const app = express()

let definitions = skiTerms;


app.use("/", express.static("./client"))
// READ
app.get("/dictionary", (req, res) => {
    res.json(skiTerms)
})

// example of middleware
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(`${req.method} is a request for ${req.url}`)
    if(Object.keys(req.body).length) {
        // console log the rest of the body
        console.log(req.body)
    }
    next(); // jump out of the loops
})



// CREATE
// add new term to a file on the local system
app.post("/dictionary", bodyParser.json(), (req, res) => {
    definitions.push(req.body);
    save()
    res.json({
        status: "success",
        term: req.body
    })
})

// DELETE
app.delete("/dictionary/:term", (req, res) => {
    const filterTerm = definitions.filter(({term}) => term == req.params.term)
    save()
    res.json({
        status: "success",
        removed: req.params.term,
        newLength: definitions.length
    })
})

// this saves the new content to the file ski-terms.json
const save = () => {
    fs.writeFile("./ski-terms.json", JSON.stringify(definitions, null, 2), (err) => {
        if(err) {
            throw err;
        }
    })
}



app.listen(3000, () => {
    console.log("ski dictionary running!")
})