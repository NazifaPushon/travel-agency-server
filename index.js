const { MongoClient } = require('mongodb');
const express = require('express');
require('dotenv').config()
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId;
const app = express()
const port = process.env.PORT || 5000;

//middlewart
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bwbvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)
async function run() {
    try {
        await client.connect();
        console.log("database is connected")
    } finally {

    }
}
run().catch(err => console.dir(err))
console.log(uri)

app.get('/', (req, res) => {
    res.send("server is running")
})

app.listen(port, () => {
    console.log("server is running at", port)
})