const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//Fix mongodb deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//Connect to mongodb
mongoose.connect('mongodb://localhost/CustomerDB');
mongoose.Promise = global.Promise; // use ES6 promise instead

app.use(express.static('public'));
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
})

//Listening for request
app.listen(process.env.port || 3000, () => {
    console.log('listening for requests || port 3000');
});