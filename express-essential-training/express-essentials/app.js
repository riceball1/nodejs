import express from 'express'
import data from './data/mock.json' assert { type: "json" };

const route = express.Router();
const app = express();
const PORT = 3000;


// serve static files
app.use(express.static('public'))

// json() and urlencoded()
// app.use(express.json()) 
// app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('hello world!')
  })

// get with next
app.get('/next', (req, res, next) => {
    console.log('next will be called')
    next()
}, ((req, res) => {
    res.send("I just set up a route")
}))


// get contact
app
.get('/contact/:contactId', (req, res) => {
    const id = Number(req.params.contactId);
    const contact = data.filter(contact => contact.id === id)
    res.send(contact)
})

app.get('/error', (req, res) => {
    throw new Error('Error happened!')
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})