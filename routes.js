const { addBookHandler } = require('./handlers/addBook');
const { getAllBooksHandler } = require('./handlers/getAllBooks');
const { getBookByIdHandler } = require('./handlers/getBookById');
const { editBookByIdHandler } = require('./handlers/editBookById');
const { deleteBookByIdHandler } = require('./handlers/deleteBook');

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
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;