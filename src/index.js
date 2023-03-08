import express from "express";
import cors from "cors";
const app = express()
app.use(cors())

app.get("/", function (_req, res) {
    res.send("hola")
})
const PORT = 3030
app.listen(PORT, function () { console.log(`server listen on port: ${PORT}`) })