const { Schema, default: mongoose } = require("mongoose");

const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = { Topic };
