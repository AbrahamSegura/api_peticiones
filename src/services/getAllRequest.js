//import { DB } from "../db/dbPrueba.js";
import Peticion from "../model/Peticion.js"
import mongoose from "mongoose"
export default async function getAllRequest() {
    const r = await Peticion.find({})
    mongoose.connection.close()
    return r
} 