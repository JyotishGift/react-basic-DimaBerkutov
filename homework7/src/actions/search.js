const searchBook = (value) => {
    return {
      type: 'BOOKS_SEARCH',
      data: value
    };
}
export default searchBook;
