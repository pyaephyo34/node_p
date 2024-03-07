// CRUD create read update delete

const {MongoClient,ObjectId, MongoNetworkError} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

async function insertOneUser() {
    const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');
        const db = client.db(databaseName);

        const result = await db.collection('users').insertOne({
            _id: id,
            name: 'Andrew',
            age: 27
        })

        console.log(result)

    }
    catch(error){
        console.error('Error',error)

    }
    finally {
        await client.close();
    }
}
// insertOneUser().catch(error => console.error(error));


async function insertManyUser() {
    const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');
        const db = client.db(databaseName);

        const result = await db.collection('users').insertMany([
        {
            name: 'Andrew',
            age: 27
        },{
            name: 'Pyae Phyo',
            age: 34
        },{
            name: 'Thandar',
            age: 36
        }])

        console.log(result)

    }
    catch(error){
        console.error('Error',error)

    }
    finally {
        await client.close();
    }
}
// insertManyUser().catch(error => console.error(error))

async function insertManyTasks() {
    const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');
        const db = client.db(databaseName);

        const result = await db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot Plants',
            completed: false
        }])

        console.log(result)

    }
    catch(error){
        console.error('Error',error)

    }
    finally {
        await client.close();
    }
}
// insertManyTasks().catch(error => console.error(error))



// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
    
//     db.collection('users').insertOne({
//         name: 'Andrew',
//         age: 27
//     })
// })


MongoClient.connect(connectionURL,{ useNewUrlParser:true},(error,client)=>{

    if(error){
        return console.log(error)
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({ name:'Thandar'},(error,result)=>{

        if(error){
            console.log(error)
        }

        console.log(result)

    })

})