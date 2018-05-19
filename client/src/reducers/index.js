/**
 * Created by nilkanthagurung on 3/5/18.
 */
import { combineReducers } from 'redux';
import books from './book_reducer';
import user from './user_reducer'

const rootReducer = combineReducers ({
    books,
    user
})

export default rootReducer;
