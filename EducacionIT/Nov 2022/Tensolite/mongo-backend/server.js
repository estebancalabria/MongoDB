const express = require("express");
const mongodb = require("mongodb");
const axios = require("axios");

const PORT = 3000;
const MONGODB_DB = "jsdb";
const MONGODB_URL = "mongodb://localhost:27017/";

const app = express();
app.use(express.json());

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
const db = mongoClient.db(MONGODB_DB);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/initSampleData", (req, res) => {
    db.collection("logs").insertOne({
        timeStamp: new Date(),
        mensaje: "Dababase Intialized"
    }).then(() => {
        res.send("Mensaje de Log Generado");
    });
});

app.get("/clonerm", (req, res) => {
    axios.get("https://rickandmortyapi.com/api/character")
        .then(resp => {
            db.collection("rmcharacters").insertMany(resp.data.results)
                .then((ok) => { res.send(ok) });
        })
})

app.get("/clientes", (req, res) => {
    db.collection("clientes")
        .find()
        .toArray()
        .then((data) => {
            res.send(data);
        })
});

app.post("/clientes", (req, res) => {
    db.collection("clientes")
        .insertOne(req.body)
        .then((data) => {
            res.send(data);
        })
});


app.get("/clientes/argentina", (req, res) => {
    db.collection("clientes")
        //.find({pais:/Argentina/})
        .find({ pais: "argentina" })
        .collation({ locale: "es", strength: 2 })
        .toArray()
        .then((data) => {
            res.send(data);
        })
});

app.get("/clientes/inglaterra", (req, res) => {
    db.collection("clientes")
        .aggregate([{ $match: { pais: "Inglaterra" } }])
        .toArray()
        .then((data) => {
            res.send(data);
        })
});



app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});
