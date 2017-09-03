import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectBook from '../actions';

class BookList extends Component {
  render() {
    const { books, selectBook } = this.props;
    return (
      <div className="book-list">
        {books.map(book => (
          <li
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
    books: state.books
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectBook: selectBook },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  BookList
);
