const { addBookHandler } = require("./handler");
const { getAllNotesHandler } = require("./handlers/getAllBooks");

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
];
 
module.exports = routes;