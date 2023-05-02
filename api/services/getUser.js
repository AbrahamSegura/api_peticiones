import md5 from "md5";
import Peticion from "../model/Peticion.js";
//import { DB } from "../db/dbPrueba.js"
import User from "../model/User.js";
export default async function getUser({ username, password }) {
  const passwordHash = md5(password);
  const user = await User.find({ username, passwordHash }).populate(
    "peticiones"
  );
  if (user[0].departamento === "informatica") {
    const p = await Peticion.find({});
    return { user, p };
  }
  return { user, p: 0 };
}
