const mongodb = require('mongodb');
const MongoCilent = mongodb.MongoClient;
let _db;
const mongoConnect = callback => {
    MongoCilent.connect(process.env.MONGOOSE)
        .then(client => {
            console.log('connected')
            // _db=client.db();
            callback(client)
        })
        .catch(err => {
            console.log(err)
            throw err;
        })
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "no database found!"
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;