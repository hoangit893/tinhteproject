const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  createDate: Date,
  content: {
    type: String,
    required: true,
    minlength: 3,
  },
  topic: {
    type: String,
    required: true,
    minlength: 3,
  },
  view: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
