const { Book } = require("../Database/books");

const getbooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send({ books });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, description } = req.body;
    const book = await Book.findOne({ title });
    if (book) {
      return res.status(400).send({ message: "Book already exists" });
    }
    const newBook = new Book({
      title,
      description,
    });
    await newBook.save();
    res.status(201).send({ book: newBook });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const searchBook = async (req, res) => {
  try {
    const { title } = req.query;
    const book = await Book.findOne({ title: { $regex: title } });
    if (!book) {
      return res.status(400).send({ message: "Book does not exist" });
    }
    res.status(200).send({ book });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  addBook,
  searchBook,
  getbooks,
};
