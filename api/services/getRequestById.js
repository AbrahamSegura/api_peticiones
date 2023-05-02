import { DB } from "../db/dbPrueba.js";

export default function getRequestById({ id }) {
    const lista = DB.peticiones
    const peticion = lista.filter(p => p.id === Number(id))
    if (!peticion) return
    return peticion
}