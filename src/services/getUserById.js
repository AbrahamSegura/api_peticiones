import md5 from "md5"
//import { DB } from "../db/dbPrueba.js"
import User from "../model/User.js"

export default async function getUserById({ username, password }) {
    const passwordHash = md5(password)
    const user = await User.find({ username, passwordHash }).exec
    return user
}