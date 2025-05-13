const deleteBookByIdHandler = (request, h) => {
    const books = require('../books'); 
        // pastikan books array diakses
        // const { id } = request.params; // Menggunakan destructuring untuk mendapatkan id dari params
        // const index = books.findIndex((book) => book.id === id); // Mencari index buku berdasarkan id

        // Menggunakan destructuring untuk mendapatkan id dari params
      const { bookId } = request.params;
        const index = books.findIndex((book) => book.id === bookId);

        if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  deleteBookByIdHandler,
};