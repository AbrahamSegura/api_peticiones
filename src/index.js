import dotenv from 'dotenv'
dotenv.config({ debug: true })
import express from "express";
import cors from "cors";
const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (_req, res) => {
    res.send("hola")
})
app.post("/validUser", (req, res) => {
    const { username, password } = req.body
    console.log(username, password);
    res.end
})
const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`server listen on port: ${PORT}`) })