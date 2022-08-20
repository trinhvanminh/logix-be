const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rate: {
    type: Number,
    required: false,
  },
  like: {
    type: Number,
    required: false,
  },
  dislike: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Movies", moviesSchema);
