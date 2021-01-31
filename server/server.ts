const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/transactions');

// init express
const app = express();

// connect to mongoDB
const dbURL = 'mongodb+srv://tom:tom@cluster0.fotgq.mongodb.net/appTom?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true,  useUnifiedTopology: true })
  .then((res) => {
    console.log('Connected to DB');
    app.listen(4201);
  })
  .catch((res) => {
    console.log(res);
  });

// manage cors headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, PUT, DELETE, POST, GET, PATCH');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.use(express.json());

app.post('/transaction/add/0', async (req, res) => {
  const transaction = new Transaction({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone,
    total_price: req.body.total_price,
    currency: req.body.currency,
    cerdit_card_type: req.body.cerdit_card_type,
    cerdit_card_number: req.body.cerdit_card_number,
  });

  try {
    const transactions = await transaction.save();
    res.send(transactions);
  } catch (err) {
    res.json(err);
  }
});

app.get('/', async (req, res) => {
  try {
    const transactions = Transaction.find().sort({first_name: -1});
    res.send(transactions);
  } catch (err) {
    res.json(err);
  }
});

app.get('/getById', async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ id: req.query.param });
    res.send(transaction);
  } catch (err) {
    res.json( err);
  }
});

app.put('/update', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.updateOne(
       { id: req.body.id },
      { $set: req.body }
      );
    res.send(updatedTransaction);
  } catch (err) {
    res.json(err);
  }
});

app.delete('', async (req, res) => {
  try {
    const removedTransaction = await Transaction.deleteOne({ id: req.body.id });
    res.send(removedTransaction);
  } catch (err) {
    res.json(err);
  }
});


