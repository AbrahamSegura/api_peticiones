import { model, Schema } from "mongoose";

const peticionSchema = new Schema({
    tipo: String,
    descripcion: String,
    departamento: String,
    estado: String,
    fecha: Date
})

peticionSchema.set('toJSON', {
    transform: (_doc, retObj) => {
        retObj.id = retObj._id
        delete retObj._id
        delete retObj.__v
    }
})

const Peticion = new model('Peticion', peticionSchema)
export default Peticion