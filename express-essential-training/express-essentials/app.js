import express from 'express'
import data from './data/mock.json' assert { type: "json" };

const app = express();
const PORT = 3000;


// serve static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json(data)
})

// get with next
app.get('/next', (req, res, next) => {
    console.log('next will be called')
    next()
}, ((req, res) => {
    res.send("I just set up a route")
}))


// get contact
app.route('/contact')
.get('/:contactId', (req, res) => {
    const id = Number(req.params.contactId);
    const contact = data.filter(contact => contact.id === id)
    res.send(contact)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})