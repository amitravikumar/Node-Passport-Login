module.exports = {
    MongoURI: 'mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1ulkh.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority'
}