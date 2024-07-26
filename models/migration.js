const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

module.exports = mongoose.model('Item', itemSchema);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('User', userSchema);

const roleSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Role', roleSchema);
