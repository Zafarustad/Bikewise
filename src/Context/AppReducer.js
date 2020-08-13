import {
  GET_STOLEN_BIKE_DATA,
  SET_LOADING,
  SET_PAGE,
  SET_QUERY,
  SET_ERROR,
  SET_START_DATE,
  SET_END_DATE,
} from './GlobalState';

const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_STOLEN_BIKE_DATA: {
      return {
        ...state,
        stolenBikes: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }

    case SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case SET_START_DATE: {
      return {
        ...state,
        startDate: action.payload,
      };
    }
    case SET_END_DATE: {
      return {
        ...state,
        endDate: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
