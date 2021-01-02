const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//Db config
const db = require('./config/keys').MongoURI;

//Connect to MongoURI
mongoose.connect(db, { useNewUrlParser : true})
    .then(() => 
        console.log('MongoDb Connected...')
    )
    .catch(err => {
        console.log(err)
    })

//Layouts EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users.js'));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, console.log(`The server listening on ${PORT}`));