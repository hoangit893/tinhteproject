const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
  },
  createDate: Date,
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 120,
    isSecureContext: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  profileImage: { type: String, required: false },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
