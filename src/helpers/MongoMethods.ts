import { MongoClient } from 'mongodb';

const url = process.env.MONGO_URL as string;
const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

async function insertData(dbname: string, dbcollection: string, insertDocument: Document) {
    try {
        await connect();
        const db = client.db(dbname);
        const col = db.collection(dbcollection);
        await col.insertOne(insertDocument);
        const doc = await col.findOne();
        console.log(doc);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

async function FindAllData(dbName: string, dbcollection: string){
    try {
        await connect();
        const db = client.db(dbName);
        const col = db.collection(dbcollection);
        const doc = await col.find().toArray();
        console.log(doc);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

async function DeleteMany(dbName: string, dbCollection: string, fieldFilter: string, deleteFilter: string) {
    try {
        await connect();
        const db = client.db(dbName);
        await db.collection(dbCollection).deleteMany({   
            fieldFilter: deleteFilter    
        });
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

connect().catch(console.dir);