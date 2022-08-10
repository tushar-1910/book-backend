const express = require("express");
const { addBook, searchBook } = require("../Handlers/books");

const bookRouter = express.Router();

bookRouter.post("/addBook", addBook);
bookRouter.get("/searchBook", searchBook);

module.exports = { bookRouter };
