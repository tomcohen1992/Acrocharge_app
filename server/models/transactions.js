const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  total_price: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true
  },
  cerdit_card_type: {
    type: String,
    required: true
  },
  cerdit_card_number: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
