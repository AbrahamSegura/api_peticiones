import Peticion from "../model/Peticion.js";
import User from "../model/User.js";
export default async function  createRequest(data){
    const {tipo, descripcion, departamento, userId} = data.req
    const user = await User.findById(userId)
    const peticion = new Peticion({
        tipo: data.descripcion2 ? data.descripcion2: tipo,
        descripcion,
        departamento,
        estado: "en espera",
        fecha: new Date()
    })
    try {
        const nuevaPeticion = await peticion.save()
        user.peticiones = user.peticiones.concat(nuevaPeticion._id)
        await user.save()
        return {
            status: "200",
        user
    }  
    } catch (error) {
        return error
    }
    
}