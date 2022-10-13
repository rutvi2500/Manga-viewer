import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/index';

const store = createStore ( 
  rootReducer,  
  composeWithDevTools(applyMiddleware(logger, thunk))
) 
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;