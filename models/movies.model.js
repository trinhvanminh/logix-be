const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rate: {
    type: Number,
    required: false,
  },
  dislike: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movies", moviesSchema);
