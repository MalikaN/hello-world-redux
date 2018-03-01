import {createStore} from 'redux';
import {showReducer} from'./Reducer';

const store =createStore(showReducer);

export default store;