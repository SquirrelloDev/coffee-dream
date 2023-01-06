const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
{
  login: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true, validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      message: 'Invalid email format'
    }
  },
  password: { type: String, required: true, minlength: 8 },
  accessLevel: {type: Number, default:parseInt(process.env.ACCESS_LEVEL_NORMAL_USER)},
  profilePhotoFilename: {type: String, default: ""},
},
{
    collection: `Users`
});

module.exports = mongoose.model('Users', usersSchema);
