import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema)

// loginRequired 
export const loginRequired = (req, res, next) => {
    if(req.user) {
        next(); // continue to the next function 
    } else {
        return res.status(401).json({message: "Unauthorized User"})
    }
}

// registration
export const registration = (req, res, next) => {
    
}