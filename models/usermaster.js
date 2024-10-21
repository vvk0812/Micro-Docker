const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {

    mobilenumber: {
      type: Number,
      uniqure: true,
    },
    email: {
      type: String,
      default: '',
    },
     name: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("usermaster", userSchema);
