const express = require("express");
const cors = require("cors");
const { connectDB } = require("./Database");
const { userRouter } = require("./Routes/users");
const { bookRouter } = require("./Routes/books");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
let port = process.env.PORT;

app.use(userRouter);
app.use(bookRouter);

connectDB().then(() => {
  app.listen(port, () => console.log("Server started on port " + port));
});
