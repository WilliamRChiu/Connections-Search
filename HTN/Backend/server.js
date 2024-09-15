require('dotenv').config(); // Ensure dotenv is at the top
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const { User } = require('./models/userSchema'); // Assuming you're using the User model for this

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

// Log the MongoDB URI to debug
console.log('MongoDB URI:', process.env.MONGO_URI);

// Connect to MongoDB Atlas without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.log('MongoDB connection error:', err));

// POST route to upload and insert JSON data into MongoDB
app.post('/upload', upload.single('jsonFile'), (req, res) => {
  const filePath = req.file.path;

  // Read the uploaded JSON file
  fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file', error: err });
    }

    try {
      // Parse JSON data
      const jsonData = JSON.parse(data);

      // Check if jsonData is an array
      if (!Array.isArray(jsonData)) {
        return res.status(400).json({ message: 'Invalid JSON format, expected an array of users' });
      }

      // Save each user object to MongoDB
      await Promise.all(jsonData.map(async (user) => {
        const newUser = new User(user); // Create a new instance of the User model
        await newUser.save();
      }));

      res.status(200).json({ message: 'JSON data successfully uploaded and saved!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving data to MongoDB', error });
    } finally {
      // Clean up the uploaded file after processing
      fs.unlinkSync(filePath); // Optionally delete the file after processing
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
