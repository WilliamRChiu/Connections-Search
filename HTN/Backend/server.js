const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nodes:{
        id: 
        {
            type: String,
            required: true,
            unique: true
        },
          name: {
            type: String,
            required: true
          },
          followers: {
            type: Number,
            required: true
        }
    }
  });
//   const linkSchema = new mongoose.Schema({
//     source: {
//       type: mongoose.Schema.Types.String,
//       ref: 'User', // References the User schema
//       required: true
//     },
//     target: {
//       type: mongoose.Schema.Types.String,
//       ref: 'User', // References the User schema
//       required: true
//     }
//   });

const User = mongoose.model('User', userSchema);


module.exports = User;