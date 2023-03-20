import dotenv from 'dotenv'
dotenv.config({ debug: true })
import express, { json } from "express";
import cors from "cors";
import getUser from './services/getUser.js';
import getRequestById from './services/getRequestById.js'
import getUserById from './services/getUserById.js';
const app = express()
app.use(cors())
app.use(json())

app.get("/", (_req, res) => {
    res.send("Fundacite Aragua")
})
app.get("/user/:id", (req, res) => {
    const { id } = req.params
    const user = getUserById({ id })
    res.json(user)
    res.end()
})
app.post("/login", (req, res) => {
    const { username, password } = req.body
    const user = getUser({ username, password })
    res.send(user)
    res.end()
})
const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`server listen on port: ${PORT}`) })