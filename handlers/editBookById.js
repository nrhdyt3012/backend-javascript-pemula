const books = require('../books');

const editBookByIdHandler = (request, h) => {
  try {
    const { bookId } = request.params;
    const { name, year, author, summary, publisher, readPage, pageCount, reading } = request.payload;

    // Validasi: nama buku harus ada
    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      }).code(400);
    }

    // Validasi: readPage tidak boleh melebihi pageCount
    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400);
    }

    const index = books.findIndex((book) => book.id === bookId);

    if (index === -1) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      }).code(404);
    }

    const updatedAt = new Date().toISOString();
    const finished = readPage === pageCount;

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }).code(200);

  } catch (error) {
    console.error(error);
    return h.response({
      status: 'error',
      message: 'Terjadi kesalahan pada server',
    }).code(500);
  }
};

module.exports = { editBookByIdHandler };
