import { ACTIVATE, SET_FILTER, REQUEST_FILTERS, RECEIVE_FILTERS, REQUEST_ITEMS, RECEIVE_ITEMS, ERROR, CLEAR_ERROR } from '../actionTypes';

const INITIAL_ITEMS = {
  isFetching: false,
  items: []
};

const INITIAL_FILTER = {
  isFetching: false,
  filters: {}
}

const INITIAL_ERROR = {
  isError: false,
  error: ''
}

export function filterState(state = INITIAL_FILTER, action) {
  switch (action.type) {
    case REQUEST_FILTERS:
      return Object.assign({}, state, {
        isFetching: true
      });
      break;
    case RECEIVE_FILTERS:
      return Object.assign({}, state, {
        isFetching: false,
        filters: action.data
      });
      break;
    default:
    return state;

  }
}

export function itemState(state = INITIAL_ITEMS, action) {
    switch (action.type) {
        case ACTIVATE:
            let item = action.data;
            let newItems = state.items.map(i => {
                i.active = (i.id == item.id);
                return i;
            });
            return Object.assign({}, state, {
              items: newItems
            });
        case REQUEST_ITEMS:
          return Object.assign({}, state, {
            isFetching: true
          });
          break;
        case RECEIVE_ITEMS:
          return Object.assign({}, state, {
            isFetching: false,
            items: action.data
          });
          break;
        default:
            return state;
    }
}

export function activeFilter(state = null, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.data;
        default:
            return state;
    }
}

export function error(state = INITIAL_ERROR, action) {
  switch (action.type) {
    case ERROR:
      return Object.assign({}, state, {
        isError: true,
        error: action.error
      });
      break;
    case CLEAR_ERROR:
      return Object.assign({}, state, {
        isError: false,
        error: ''
      });
      break;
    default:
      return state;
  }
}
