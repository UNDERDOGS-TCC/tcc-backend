import { MongoClient } from 'mongodb';

const url = "mongodb+srv://TccServicosPublicos:6KODhv4Z11MGpJkl@servicospublicos.t6crf.mongodb.net/sample_geospatial?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
    } catch (err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
}

connect().catch(console.dir);