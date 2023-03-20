//import conn from './conn'

import md5 from 'md5'
import { DB } from './dbPrueba.js'
export default function getUser({ username = "", password = "" }) {
    const decodedPassword = atob(password)
    const encodePassword = md5(decodedPassword)
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
    let l = {}
    console.log(decodedPassword, encodePassword);
    const thereUser = e => users[e].username === username && users[e].password === encodePassword
    for (const e in users) {
        if (thereUser(e)) l = users[e]
    }
    return l
}
