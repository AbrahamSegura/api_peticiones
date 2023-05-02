import "./db/conn.js";
import dotenv from "dotenv";
dotenv.config({ debug: true });
import express, { json } from "express";
import cors from "cors";
import getUser from "./services/getUser.js";
import getUserById from "./services/getUserById.js";
import getAllRequest from "./services/getAllRequest.js";
import createRequest from "./services/createRequest.js";
const app = express();
app.use(cors());
app.use(json());

app.get("/", (_req, res) => {
  res.send("Fundacite Aragua");
});

app.get("/AllRequest", async (_req, res) => {
  const request = await getAllRequest();
  res.send(request);
  res.end();
});
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = getUserById({ id });
  res.json(user);
  res.end();
});
app.post("/request", async (req, res) => {
  const data = req.body;
  const response = await createRequest(data);
  res.send(response);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const data = await getUser({ username, password });
  res.json(data).status(200);
  res.end();
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});
