const { addBookHandler } = require("./handler");
const { getAllBooksHandler } = require("./handlers/getAllBooks");
const { getBookByIdHandler } = require("./handlers/getBookById");

const routes = [
 {
   method: 'POST',
   path: '/books',
   handler: addBookHandler
 },
 {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },

];
 
module.exports = routes;