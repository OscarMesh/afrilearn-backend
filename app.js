require("dotenv").config();
require("express-async-errors");

const cors = require("cors");
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const subjectsRouter = require("./routes/subjects");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middlewear
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>AFrilean API</h1><a href='/api/v1/subjects'>subjects</a>");
});
app.use("/api/v1/subjects", subjectsRouter);

// middleware

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
