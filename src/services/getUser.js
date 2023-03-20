//import conn from './conn'

import md5 from 'md5'
import { DB } from '../db/dbPrueba.js'
import getUserById from './getUserById.js'

export default function getUser({ username = "", password = "" }) {
    const encodePassword = md5(password)
    // const query = `SELECT * FROM 'table' WHERE 'username'=${username} AND 'password'=${password}`
    // const result = await conn.query(query, (err, response, _fields) => {
    //     if (err) {
    //         console.error(err)
    //         conn.end()
    //     }
    //     return response
    // })
    // return result
    const users = DB.users
    const thereUser = e => e.username === username && e.password === encodePassword
    const user = users.filter(thereUser)[0]
    if (!user) return {}
    return {
        id: user.id,
        password: user.password,
        departamento: user.departamento,
        lista_peticiones: getUserById(user.lista_peticiones)
    }
}
