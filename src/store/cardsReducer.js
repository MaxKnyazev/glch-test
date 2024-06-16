import { 
  GET_ALL_CARDS_PENDING, GET_ALL_CARDS_SUCCESS, GET_ALL_CARDS_ERROR,
  DELETE_CARD_BY_ID_PENDING, DELETE_CARD_BY_ID_SUCCESS, DELETE_CARD_BY_ID_ERROR,
  SET_COUNTER_CARDS_VALUE, SET_INIT_FALSE_VALUE, TOGGLE_THEME
} from './cardsActionTypes';

const initialState = {
  cards: [],
  countCards: 5,
  isInit: true,
  isDark: true,
  isLoading: false,
  error: null,
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARDS_PENDING:
      return {...state, isLoading: true, isInit: true}
    case GET_ALL_CARDS_SUCCESS:
      return {...state, isLoading: false, isInit: false, cards: action.payload}
    case GET_ALL_CARDS_ERROR:
      return {...state, isLoading: false, isInit: false, error: action.payload}

    case DELETE_CARD_BY_ID_PENDING:
      return {...state, isLoading: true}
    case DELETE_CARD_BY_ID_SUCCESS:
      return {
        ...state, 
        isLoading: false, 
        cards: state.cards.filter(elem => elem.id !== action.payload),
        isInit: !(state.cards.length-1)
      }
    case DELETE_CARD_BY_ID_ERROR:
      return {...state, isLoading: false, error: action.payload}

    case SET_COUNTER_CARDS_VALUE:
      return {...state, countCards: action.payload}

    case SET_INIT_FALSE_VALUE:
      return {...state, isInit: action.payload}

    case TOGGLE_THEME:
      return {...state, isDark: !state.isDark}
  
    default: return state;
  }
}