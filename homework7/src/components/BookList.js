import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions';

class BookList extends Component {
  render() {
    const { books, selectBook, searchBooks } = this.props;
    console.log('fdsfasdfsdfdsssssssssssssssssssssssssssssssssss', searchBooks)
    
    // const search = e.target.value;
    console.log('searchBooks', searchBooks)
    const searchBooksArr = books.filter(elem => {
        return elem.name.slice(0, searchBooks.length) == searchBooks;
    })
    console.log('searchBooksArr', searchBooksArr);
    return (
      <div className="book-list">
        {searchBooksArr.map((book, key) => (
          <li key ={key}
            onClick={() => {
              selectBook(book);
            }}>
            {book.name}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    searchBooks: state.searchBooks
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectBook: selectBook },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
