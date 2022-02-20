const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://TccServicosPublicos:6KODhv4Z11MGpJkl@servicospublicos.t6crf.mongodb.net/sample_geospatial?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
    } catch (err) {
        console.log(err);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);