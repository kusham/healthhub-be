const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var healthDataSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    height: {
      type: String,
      default: "",
    },
    bloodPressure: {
      type: String,
      default: "",
    },
    glucoseLevel: {
      type: String,
      default: "",
    },
    ecg: {
      type: String,
      default: "",
    },
    weight: {
      type: String,
      default: "",
    },
    cholesterol: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("HealthData", healthDataSchema);
