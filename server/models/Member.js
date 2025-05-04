const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  image: String
});

module.exports = mongoose.model('Member', MemberSchema);
