const express = require("express");
const app = express()
const PORT = 8000;
const db = require('./utils/database')
const User = require('./models/users.models')
const userRoute = require('./routes/users.routes')
const cors = require("cors")

//coneccion (testing) a base de dato
db.authenticate()
  .then(() => console.log("Successful Auth"))
  .catch((error) => console.error(error)); 

db.sync()
.then(() => console.log("base de datos sincronizada"))
.catch((error) => console.log(error))

app.use(cors());
app.use(express.json());
app.use(userRoute);


app.get("/", (req, res) => {
    res.send("bienvenido")
})

app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`);
})