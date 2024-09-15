const mongoose = require('mongoose');

// Define a schema for storing JSON data
const jsonDataSchema = new mongoose.Schema({
  data: Object, // This will store any JSON data as an object
});

const JsonData = mongoose.model('JsonData', jsonDataSchema);

module.exports = JsonData;
