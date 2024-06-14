import { 
  GET_ALL_CARDS_PENDING, GET_ALL_CARDS_SUCCESS, GET_ALL_CARDS_ERROR,
  DELETE_CARD_PENDING, DELETE_CARD_SUCCESS, DELETE_CARD_ERROR
} from './cardsActionTypes';

const initialState = {
  cards: [],
  isLoading: false,
  error: null,
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARDS_PENDING:
      return {...state, isLoading: true}
    case GET_ALL_CARDS_SUCCESS:
      return {...state, isLoading: false, cards: action.payload}
    case GET_ALL_CARDS_ERROR:
      return {...state, isLoading: false, error: action.payload}

    default: return state;
  }
}