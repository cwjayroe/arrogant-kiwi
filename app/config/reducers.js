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

const repoReducer = (state = initialState, action) => {
  const { repos } = state
  const { type, payload } = action

  switch (type) {
    case 'storeRepos':
      
      var newRepos = { ...repos, ...payload }
      return newRepos;
    default:
      return state
  }
};

export default combineReducers({
  user: userReducer,
  repos: repoReducer
});