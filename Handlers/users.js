const jwt = require("jsonwebtoken");
const { User } = require("../Database/users");
require("dotenv").config();

const secret = process.env.SECRET;

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).send({message:"user created successfully", user: newUser });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("password");
    // console.log(user)
    if (!user) {
      return res.status(400).send({ message: "User does not exist" });
    } else if (user.password != password) {
      return res.status(400).send({ message: "Please Enter correct password" });
    }
    const token = jwt.sign({ _id: user._id }, secret);
    res.status(200).send({message:"user logged in", token });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const addUserBook = async (req, res) => {
  try {
    const { token } = req.headers;
    const { bookId } = req.params;
    const userid = jwt.decode(token, secret);
    const user = await User.findOne({ _id: userid._id });
    if (user.books.includes(bookId)) {
      return res.status(400).send({ message: "Book already exists" });
    }
    user.books.push(bookId);
    await user.save();
    res.status(201).send({message: "Book already exists", user });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getUserBooks = async (req, res) => {
  try {
    const { token } = req.headers;
    const userid = jwt.decode(token, secret);
    const user = await User.findOne({ _id: userid._id }).populate("books");
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteUserBook = async (req, res) => {
  try {
    const { token } = req.headers;
    const { bookId } = req.params;
    const userid = jwt.decode(token, secret);
    console.log(bookId, userid);
    const user = await User.findOne({ _id: userid._id });
    console.log(user);
    if (!user.books.includes(bookId)) {
      return res.status(400).send({ message: "Book does not exist" });
    }
    user.books.pull(bookId);
    await user.save();
    res.status(201).send({message: "Book deleted", user });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const singleUserBooks = async (req, res) => {
  try {
    const { name } = req.query;
    const user = await User.findOne({ name }).populate("books");
    if (!user) {
      return res.status(400).send({ message: "User does not exist" });
    }
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  addUserBook,
  getUserBooks,
  deleteUserBook,
  singleUserBooks
};
