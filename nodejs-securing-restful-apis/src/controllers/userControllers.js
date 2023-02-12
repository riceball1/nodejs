import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema)
export const SECRET_WORD = 'RESTFULAPIs'

// loginRequired 
export const loginRequired = (req, res, next) => {
    if(req.user) {
        next(); // continue to the next function 
    } else {
        return res.status(401).json({message: "Unauthorized User"})
    }
}

// registration
export const register = (req, res, next) => {
    const newUser = new User(req.body) 
    // set up hashPassword
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10)

    // this is the way to save via mongodb
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            })
        } else {
            // pass it back to the response
            // set as undefined for security purposes
            user.hashPassword = undefined;
            return res.json(user)
        }
    })
}

// login function
export const login = (req, res) => {
    User.findOne({
        email: req.body.email,
    }, (err, user) => {
        if(err) {
            throw err;
        } 
        if(!user) {
            res.status(401).json({message: 'Authentication failed, no user found'})
        } else if (user) {
            if (!user.comparePassword(req.body.password, user.hashPassword)) {
                res.status(401).json({message: 'Authentication failed, wrong password'})
            } else {
                // a secret word used for jwt to sign the token

                return res.json({token: jwt.sign({email: user.email, username: user.username, _id: user.id}, SECRET_WORD)})
            }
        }
    })
}