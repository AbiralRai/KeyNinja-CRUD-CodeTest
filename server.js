const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

//set up express app
const app = express();

//Fix mongodb deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise; // use ES6 promise instead

//Connect to mongodb
mongoose.connect('mongodb://localhost/CustomerDB', ).then(() => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!
if (process.env.CORS) {
  app.use(cors());
}
app.use(express.static('public'));
app.use(bodyParser.json());

//initialize routess
app.use('/api/customers/', require('./routes/customer.route'));
// app.use("/", require("./routes/customer.route"));
// app.use('/api', require('./routes/api'));

//error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
})

//Listening for request
app.listen(process.env.port || 5000, () => {
    console.log('listening for requests || port 5000');
});