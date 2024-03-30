const mongoose = require("mongoose");

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
});

const personSchema = new mongoose.Schema({
  username: { type: String },
  userID: String,
  userlocation: String,
  usercontact: Number,
  userInStock: {
    stockname: String,
    stockInQuantity: Number,
  },
  stockStatus: Boolean,
});

const stock = new mongoose.Schema({
    stockname: String,
    stockQuantityAvalible: Number,
    stockLoaded: Number,
})

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Person = mongoose.model('Person', personSchema);
const Stock = mongoose.model('Stock', stock);


module.exports = {
  User,
  Person,
  Stock
};