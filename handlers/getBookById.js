const books = require('../books');

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.find((b) => b.id === bookId); // ✅ gunakan find, bukan filter

  if (book != null) {
    return h.response({
      status: 'success',
      data: {
        book,
      },
    }).code(200); // ✅ pastikan kembalikan response dengan status code 200
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

module.exports = {
  getBookByIdHandler,
};
