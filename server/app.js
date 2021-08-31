const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');

mongoose.connect(MONGOURI); // this will get access to the db
mongoose.connection.on('connected', () => {
    console.log("Connected to mongoose db");
})
mongoose.connection.on('error', (err) => {
    console.log("Error in db connnection", err);
})

require('./models/user');
require('./models/post')

app.use(express.json()); // to parse the json string
app.use(require('./routes/auth'));
app.use(require('./routes/post'))
const PORT = 5000;
// pass - nejndkKqOTOokmeZ


app.listen(PORT, () => {
    console.log("Server is runnig on", PORT);
});


