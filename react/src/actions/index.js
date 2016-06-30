import fetch from 'isomorphic-fetch';
import { ACTIVATE, SET_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_ITEMS, RECEIVE_ITEMS, ERROR, CLEAR_ERROR } from '../actionTypes';

export function requestFilters() {
  return {
    type: REQUEST_FILTERS
  }
}

export function getFilters() {
  return dispatch => {
    dispatch(requestFilters());
    return fetch('http://www.kiddom.co/content/types.json')
    .then(response => response.json())
    .then(data => {
      dispatch(receiveFilters(data));
      let initFilter = Object.keys(data)[0];
      dispatch(getItems(initFilter));
    })
    .catch(err => {
      dispatch(setError(err));
    })
  }
}

export function receiveFilters(filters) {
  return {
    type: RECEIVE_FILTERS,
    status: 'success',
    data: filters
  }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        data: filter
    };
}

export function requestItems() {
  return {
    type: REQUEST_ITEMS
  }
}

export function getItems(filter) {
  return dispatch => {
    dispatch(setFilter(filter));
    dispatch(requestItems());
    return fetch('http://www.kiddom.co/content.json?source=' + filter)
    .then(response => response.json())
    .then(data => {
      dispatch(receiveItems(data.results));
    })
    .catch(err => {
      dispatch(setError(err));
    })
  }
}

export function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    status: 'success',
    data: items
  }
}

export function activate(item) {
    return {
        type: ACTIVATE,
        data: item
    };
}

export function setError(err) {
  return {
    type: ERROR,
    error: err
  }
}

export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}
