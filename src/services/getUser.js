import md5 from "md5"
import mongoose from "mongoose"
//import { DB } from "../db/dbPrueba.js"
import User from "../model/User.js"
export default async function getUser({ username, password }) {
    const passwordHash = md5(password)
    const user = await User.find({ username, passwordHash }).populate('peticiones')
    // mongoose.connection.close()
    return user
}
