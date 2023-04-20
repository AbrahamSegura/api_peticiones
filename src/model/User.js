import { model, Schema } from "mongoose";
import Peticion from "../model/Peticion.js"
const userSchema = new Schema({
    username: String,
    correo: String,
    passwordHash: String,
    departamento: String,
    peticiones: [{
        type: Schema.Types.ObjectId,
        ref: Peticion
    }]
})

userSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj.passwordHash
        delete retObj._id
        delete retObj.__v
    }
})
const User = new model('User', userSchema)
export default User