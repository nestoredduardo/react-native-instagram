import { USER_STATE_CHANGE } from './userTypes';

const initialState = {
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return { ...initialState, currentUser: action.payload };
    default:
      return state;
  }
};

export default reducer;
