import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';
import PropTypes from 'prop-types';

//Types
export const GET_STOLEN_BIKE_DATA = 'GET_STOLEN_BIKE_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_PAGE = 'SET_PAGE';
export const SET_QUERY = 'SET_QUERY';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_ERROR = 'SET_ERROR';

const initialState = {
  stolenBikes: null,
  loading: false,
  page: null,
  query: '',
  startDate: '',
  endDate: '',
  error: false,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setLoading(value) {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  }

  function getBikeDataAction(data) {
    dispatch({
      type: GET_STOLEN_BIKE_DATA,
      payload: data,
    });
  }

  function setPage(value) {
    dispatch({
      type: SET_PAGE,
      payload: value,
    });
  }

  function setQuery(value) {
    dispatch({
      type: SET_QUERY,
      payload: value,
    });
  }

  function setStartDate(value) {
    dispatch({
      type: SET_START_DATE,
      payload: value,
    });
  }
  function setEndDate(value) {
    dispatch({
      type: SET_END_DATE,
      payload: value,
    });
  }
  function setError(value) {
    dispatch({
      type: SET_ERROR,
      payload: value,
    });
  }

  async function getStolenBikeData(
    page = 1,
    query = '',
    startDate = '',
    endDate = ''
  ) {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://bikewise.org/api/v2/incidents?page=${page}&per_page=10&proximity=berlin&query=${query}&occurred_after=${startDate}&occurred_before=${endDate}`
      );
      setPage(page);
      setQuery(query);
      setStartDate(startDate);
      setEndDate(endDate);
      getBikeDataAction(res.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        stolenBikes: state.stolenBikes,
        loading: state.loading,
        page: state.page,
        query: state.query,
        startDate: state.startDate,
        endDate: state.endDate,
        error: state.error,
        getStolenBikeData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
