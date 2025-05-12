const books = require('../books'); // pastikan books array diakses

const getAllBooksHandler = (request, h) => {
  const simplifiedBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return h.response({
    status: 'success',
    data: {
      books: simplifiedBooks,
    },
  }).code(200);
};

module.exports = {
  getAllBooksHandler,
};
