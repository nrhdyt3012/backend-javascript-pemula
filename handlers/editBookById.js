const editBookByIdHandler = (request, h) => {
      const { id } = request.params;
      const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

      const updatedAt = new Date().toISOString();
          const index = books.findIndex((book) => book.id === id);
        if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading
    };
 
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
    }

    module.exports = {
        editBookByIdHandler,
    };