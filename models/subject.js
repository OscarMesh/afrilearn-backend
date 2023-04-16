const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter topic's title"],
  },
  videoUrl: {
    type: String,
    required: [true, "Please provide a link to the video"],
  },
  description: {
    type: String,
    required: [true, "Please enter topic's title"],
  },
});

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  topics: [topicSchema],
});

module.exports = mongoose.model("Subject", subjectSchema);
