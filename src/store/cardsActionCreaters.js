import { 
  GET_ALL_CARDS_PENDING, GET_ALL_CARDS_SUCCESS, GET_ALL_CARDS_ERROR,
  DELETE_CARD_PENDING, DELETE_CARD_SUCCESS, DELETE_CARD_ERROR
} from './cardsActionTypes';
// import { axiosInstance } from '../../utils/axiosInstance';

export const getAllCardsPending = () => {
  return {
    type: GET_ALL_CARDS_PENDING,
  }
}

export const getAllCardsSuccess = (cards) => {
  return {
    type: GET_ALL_CARDS_SUCCESS,
    payload: cards,
  }
}

export const getAllCardsError = (error) => {
  return {
    type: GET_ALL_CARDS_ERROR,
    payload: error,
  }
}

export const getAllCardsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllCardsPending());

      fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
        .then((response) => response.json())
        .then((cards) => dispatch(getAllCardsSuccess(cards)));
      // const cards = response.data.cards;

      
    } catch (error) {
      dispatch(getAllCardsError(error));
    }
  }  
}