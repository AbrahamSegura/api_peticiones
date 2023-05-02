import mongoose from "mongoose"
//const { model, Schema } = mongoose
const password = "l0uPzxrzIpxisO1R"
const CONNECTION_TRING = `mongodb+srv://abraham_admin_1:${password}@satestadb.rrnxmw7.mongodb.net/fundacite?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_TRING).then(() => {
    console.log('its connect')
}).catch(err => {
    console.error(err.message)
})
// const peticionSchema = new Schema({
//     tipo: String,
//     descripcion: String,
//     departamento: String,
//     estado: String,
//     fecha: Date
// })

// peticionSchema.set('toJSON', {
//     transform: (_doc, retObj) => {
//         retObj.id = retObj._id
//         delete retObj._id
//         delete retObj._v
//     }
// })


// const Peticion = new model('Peticion', peticionSchema)
// const peticion = new Peticion({
//     tipo: "no conecta",
//     descripcion: "no puedo conectarme al wifi",
//     departamento: "administraccion",
//     estado: "en proceso",
//     fecha: new Date()
// })
// peticion.save()
// const userSchema = new Schema({
//     username: String,
//     correo: String,
//     passwordHash: String,
//     departamento: String,
//     peticiones: [{
//         type: Schema.Types.ObjectId,
//         ref: Peticion
//     }]
// })

// userSchema.set('toJSON', {
//     transform: (_doc, retObj) => {
//         retObj.id = retObj._id
//         delete retObj.passwordHash
//         delete retObj._id
//         delete retObj._v
//     }
// })
// const User = new model('User', userSchema)
// const user = new User({
//     username: "javier1",
//     passwordHash: "37eb27c624f2556ef2a9bb78649fd5ea",
//     departamento: "informatica",
//     peticion: [""]
// })
// user.save()
