const selectBook = (book) => {
  console.log('book', book)
  return {
      type: 'BOOK_SELECT',
      data: book
  };
}
export default selectBook;