import { 
  GET_ALL_CARDS_PENDING, GET_ALL_CARDS_SUCCESS, GET_ALL_CARDS_ERROR,
  DELETE_CARD_BY_ID_SUCCESS, SET_COUNTER_CARDS_VALUE, TOGGLE_THEME
} from './cardsActionTypes';

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

export const getAllCardsAsync = (count) => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
  const CLIENT_ERROR = '400+ Internal client error';
  const SERVER_ERROR = '500+ Internal server error';

  return async (dispatch) => {
    try {
      dispatch(getAllCardsPending());
      const response = await fetch(`${BASE_URL}?_limit=${count}`)
      if (response.ok) {
        const cards = await response.json();
        dispatch(getAllCardsSuccess(cards));
      } else {
        if (response.status >= 400 && response.status < 500) throw new Error(CLIENT_ERROR);
        if (response.status === 500) throw new Error(SERVER_ERROR);
        throw new Error(response.status);
      }
    } catch (error) {
      dispatch(getAllCardsError(error));
    }
  }  
}

export const deleteCardByIdSuccess = (id) => {
  return {
    type: DELETE_CARD_BY_ID_SUCCESS,
    payload: id,
  }
}

export const setCounterCardsValue = (value) => {
  return {
    type: SET_COUNTER_CARDS_VALUE,
    payload: value,
  }
}

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}