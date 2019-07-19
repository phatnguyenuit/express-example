import { FETCH_ARTICLES } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;

    default:
      return state;
  }
};
