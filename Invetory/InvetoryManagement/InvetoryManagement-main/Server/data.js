const mongoose = require('mongoose');
const { Person, Stock } = require('./db');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Meet_Parekh:meetparekh2003@cluster0.jimjnb8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Inventery" });

// Define predefined data for Person model
const personPredefinedData = [
  { username: 'Jay Ambe Kariyana', userID: '#B0082732', usercontact: '1234567890', location: 'Mumbai', stockname: 'Stock1', stockInQuantity: 10, stockStatus: true },
  { username: 'Jay Ambe Kariyana', userID: '#B0082732', usercontact: '9876543210', location: 'Goa', stockname: 'Stock2', stockInQuantity: 20, stockStatus: false },
  // Add more predefined data objects as needed
];

// Define predefined data for Stock model
const stockPredefinedData = [
  { stockname: 'Stock1', stockQuantityAvalible: 100, stockLoaded: 50},
  { stockname: 'Stock2', stockQuantityAvalible: 200, stockLoaded: 100},
  // Add more predefined data objects as needed
];

// Function to add predefined data for the Person model
async function persondata() {
  try {
    await Person.insertMany(personPredefinedData);
    console.log('Predefined data for Person added successfully');
  } catch (error) {
    console.error('Error adding predefined data for Person:', error);
  } 
}

// Function to add predefined data for the Stock model
async function stockdata() {
  try {
    await Stock.insertMany(stockPredefinedData);
    console.log('Predefined data for Stock added successfully');
  } catch (error) {
    console.error('Error adding predefined data for Stock:', error);
  } 
}

// Add predefined data for both Person and Stock models
async function addPredefinedData() {
  try {
    await persondata();
    await stockdata();
    console.log('All predefined data added successfully');
  } catch (error) {
    console.error('Error adding predefined data:', error);
  } finally {
    // Close MongoDB connection
    mongoose.connection.close();
  }
}

// Call the function to add predefined data
addPredefinedData();
