import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import jwt from 'jsonwebtoken';
import { SECRET_WORD } from './src/controllers/userControllers';

const app = express();
const PORT = 3000;

mongoose.set('strictQuery', false);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// JWT setup
// ensures that request is authorized
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], SECRET_WORD, (err, decode) => {
            if(err) {
                res.user = undefined
            }
            req.user = decode
            next()

        })
    } else {
        // do not pass data back if we do not need to
        req.user = undefined
        next()
    }
})


routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);