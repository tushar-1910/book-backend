const express = require("express");
const { createUser, loginUser, addUserBook, getUserBooks, deleteUserBook, singleUserBooks } = require("../Handlers/users");

const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.post("/loginUser", loginUser);
userRouter.post("/addUserBook/:bookId",addUserBook)
userRouter.get("/getUserBooks",getUserBooks)
userRouter.delete("/deleteUserBook/:bookId",deleteUserBook)
userRouter.get("/singleUserBooks",singleUserBooks)

module.exports = {
  userRouter,
};
