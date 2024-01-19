// src/store/reducers/index.ts
import { combineReducers } from 'redux';
import dataReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
