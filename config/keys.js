module.exports = {
    MongoURI: 'mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mycluster.thdgt.mongodb.net/<dbname>?retryWrites=true&w=majority'
}