import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { cardsReducer } from './cardsReducer';

const rootReducer = combineReducers({
  cardsReducer,

})

export const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);