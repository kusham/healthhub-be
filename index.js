const express = require("express");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");

const dbConnect = require("./src/config/DBConnect");

const userRouter = require("./src/routes/UserRoutes");
const packageRouter = require("./src/routes/PackageRoutes");
const healthRouter = require("./src/routes/HealthDataRoutes");


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
dbConnect();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.use("/auth", userRouter);
app.use("/package", packageRouter);
app.use("/health", healthRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
