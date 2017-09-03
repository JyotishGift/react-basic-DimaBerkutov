import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookActive extends Component {
  render() {
    const { selectedBook } = this.props;
    if (!selectedBook) {
      return <div className="book-active">Выберите книгу</div>;
    }
    return (
      <div className="book-active">
        <div>название книги: {selectedBook.name}</div>
        <div>количество страниц: {selectedBook.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedBook: state.selectedBook
  };
};

export default connect(mapStateToProps)(BookActive);
