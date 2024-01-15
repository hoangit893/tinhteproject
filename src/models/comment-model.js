const { Schema, default: mongoose } = require("mongoose");

const comment = new Schema({
  _id: Schema.Types.ObjectId,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
  },
  createDate: Date,
});

const Comment = mongoose.model("Comment", comment);

module.exports = { Comment };
