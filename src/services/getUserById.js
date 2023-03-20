import { DB } from "../db/dbPrueba.js"

export default function getUserById(id) {
    const getLista = DB.lista_peticiones.filter(x => x.id === id)[0].lista
    const separado = getLista.split(",").map(x => Number(x))
    const getPeticionLista = separado.map(y => y = DB.peticiones.filter(a => a.id === y)[0])
    return getPeticionLista
}