const {MongoClient}=require('mongodb');

const url="mongodb://127.0.0.1:27017"
const client=new MongoClient(url)

const insertToDB=async (data)=>{
    const database=client.db("student");
    const collection=database.collection('information')
    await client.connect();
   const dbResponse= await collection.insertOne(data)
    await client.close()
    return dbResponse;
}

// const findDB=async (query)=>{
    
// }

// const updateDB=async(filter,object)=>{

// }

// const deleteDB=async (filter)=>{
    
// }



module.exports={
    insertToDB,
}


