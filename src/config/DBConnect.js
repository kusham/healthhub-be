const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      console.log("Database Connection has been established successfully.")
    )
    .catch((error) =>
      console.error("Unable to connect to the database:", error.message)
    );
};

module.exports = dbConnect;
