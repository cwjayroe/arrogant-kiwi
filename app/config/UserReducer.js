import { combineReducers } from 'redux';

const initialState = {
};

const userReducer = (state = initialState, action) => {
  const { user } = state
  const { type, payload } = action

  switch (type) {
    case 'loginUser':

      var loggedInUser = { ...user, ...payload }

      return loggedInUser;
    default:
      return state
  }
};

export default combineReducers({
  user: userReducer,
});