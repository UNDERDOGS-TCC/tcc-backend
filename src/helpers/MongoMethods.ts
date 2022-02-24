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

async function insert(dbname: string, dbcollection: string, insertDocument: Document) {
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

async function Find(dbName: string, dbcollection: string, fieldFilter: string, findFilter: string){
    try {
        await connect();
        const db = client.db(dbName);
        const col = db.collection(dbcollection);
        const doc = await col.find({
            [fieldFilter]: findFilter 
        }).toArray();
        console.log(doc);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

async function Delete(deleteQtd: string, dbName: string, dbCollection: string, fieldFilter: string, deleteFilter: string) {
    try {
        await connect();
        const db = client.db(dbName);

        if (deleteQtd.toLowerCase() === "one") {
            await db.collection(dbCollection).deleteOne({   
                [fieldFilter]: deleteFilter    
           });
        } else if(deleteQtd.toLowerCase() === "many"){
            await db.collection(dbCollection).deleteMany({   
                [fieldFilter]: deleteFilter    
           });
        }
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();
    }
}

async function Update(updateQtd: string, dbName: string, dbCollection: string, fieldFilter:string, valueFilter: string, fieldUpdate: string, valueUpdate: string) {
    try {
        await connect();
        const db = client.db(dbName);
        const col = db.collection(dbCollection);

        if (updateQtd.toLowerCase() === "one") {
            col.updateOne({ [fieldFilter]: valueFilter}, {
                [fieldUpdate]: valueUpdate
            });
        } else if(updateQtd.toLowerCase() === "many"){
            col.updateMany({ [fieldFilter]: valueFilter}, {
                [fieldUpdate]: valueUpdate
            });
        }
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

connect().catch(console.dir);

function elif() {
    throw new Error('Function not implemented.');
}
