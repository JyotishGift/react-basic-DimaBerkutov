import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import searchBook from '../actions/search';
import searchBook from '../actions/search';

class Search extends Component {
    render() {
        const { books, searchBook } = this.props;        
        return (
            <div>
                <input onChange={(e) => {
                    {/* const search = e.target.value;
                    console.log('books', books)
                    const searchBooksArr = books.filter(elem => {
                        return elem.name.slice(0, search.length) == search;
                    })
                    console.log('searchBooksArr', searchBooksArr); */}
                    searchBook(e.target.value);
                }} className="searchInput" type="text" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        books: state.books,
        searchBooks: state.searchBooks
    };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { searchBook: searchBook },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);