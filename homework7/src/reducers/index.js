import { combineReducers } from 'redux';

import selectedbookReducer from './reducer_selectedbook';
import booksReducer from './reducer_books';
import searchReducer from './reducer_search';

const rootReducer = combineReducers({
    selectedBook: selectedbookReducer,
    books: booksReducer,
    searchBooks: searchReducer
})


export default rootReducer;
