const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, database) => {
    if (err) return console.log(err);
    const db = database.db('bikefix');

    require('./app/routes')(app, db);

    database.close();
});



app.listen(port, () => { console.log('We are live on ' + port); });