// src/store/store.ts
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
