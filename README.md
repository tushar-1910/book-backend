# Book Store API

baseURL : https://book-tardiverse.herokuapp.com/

## Description
<h1>Routes</h1>
<h2><li>Book Store Routes</li></h2>
<ol>
<li>Add book to catalogue : /baseURL/addBook</li>
User can add a book in the catalogue by sending title and description of the book.

<br>
<br>
<li>Search a book in catalogue : /baseURL/searchBook?title=<"title of the book"></li>
User can search a book in the catalogue by sending title of the book as query

<br>
  <br>
</ol>
<h2><li>User Routes</li></h2>
<ol>
<li>Create a user : /baseURL/createUser</li>
User can create an account by sending name , email, password as body and will get a response with user details.

<br>
  <br>
<li>Login a user : /baseURL/loginUser</li>
User can get logged in by sending email& password as body and will get a response with the token.

<br>
  <br>
<li>Add book to user catalogue : /baseURL/addUserBook/:BookId</li>
User can add a book in the user catalogue by sending book id as path parameter and sending token as header.

<br>
  <br>
<li>Get all books of logged in user: /baseURL/getUserBooks</li>
User can get all the books of itself by sending token as header.

<br>
  <br>
<li>Delete a book from user catalogue : /baseURL/deleteUserBook/:bookId</li>
User can delete a book from the user catalogue by sending book id as path parameter and sending token as header.

<br>
  <br>
<li>Get all books of other user: /baseURL/singleUserBooks?name=<"name of user"></li>
User can get all the books of other user by sending name of the user as query parameter.

</ol>
