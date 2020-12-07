require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//set up express app
const app = express();

//Fix mongodb deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise; // use ES6 promise instead

const db = process.env.MONGO_DB;
//Connect to mongodb
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log('Database is connected');
    },
    (err) => {
      console.log('Can not connect to the database' + err);
    }
  );

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

//initialize routess
app.use('/api/customers/', require('./routes/customer.route'));

//error handling
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

const port = process.env.PORT || 5000;

//Listening for request

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
