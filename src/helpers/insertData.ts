var { MongoClient } = require('mongodb');

const url = "mongodb+srv://TccServicosPublicos:6KODhv4Z11MGpJkl@servicospublicos.t6crf.mongodb.net/sample_geospatial?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function insertData() {
    try {
        await client.connect();
        const dbName = "test";
        const db = client.db(dbName);

        const col = db.collection("test");

        let testDocument = {
            "name": "Guikemon",
            "birth": "21/07/2001"
        }

        //const promise = await col.insertOne(testDocument);
        const doc = await col.find().toArray();
        console.log(doc);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

insertData().catch(console.dir);