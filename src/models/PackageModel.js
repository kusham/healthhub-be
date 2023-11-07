const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Package", packageSchema);
