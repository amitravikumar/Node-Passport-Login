const express = require('express');


const app = express();
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users.js'));

const PORT  = process.env.PORT || 5000;

app.listen(PORT, console.log(`The server listening on ${PORT}`));