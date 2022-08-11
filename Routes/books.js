const express = require("express");
const { addBook, searchBook, getbooks } = require("../Handlers/books");

const bookRouter = express.Router();

bookRouter.get("/", getbooks);
bookRouter.post("/addBook", addBook);
bookRouter.get("/searchBook", searchBook);

module.exports = { bookRouter };
