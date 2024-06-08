import { combineReducers } from 'redux';
import {
  FETCH_PAINTINGS_REQUEST,
  FETCH_PAINTINGS_SUCCESS,
  FETCH_PAINTINGS_FAILURE,
} from './actions';

const initialState = {
  paintings: [],
  loading: false,
  error: null,
};

const paintingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAINTINGS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PAINTINGS_SUCCESS:
      return {
        ...state,
        paintings: action.payload,
        loading: false,
      };
    case FETCH_PAINTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
});

export default rootReducer;
