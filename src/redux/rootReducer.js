import { combineReducers } from 'redux'
import bookReducer from './books/reducer'
import filterReducer from './filter/reducer'
const rootReducer = combineReducers({
    books: bookReducer,
    filter: filterReducer
})
export default rootReducer;