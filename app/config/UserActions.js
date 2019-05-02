export const loginUser = (email, password, userDetails) => (
  {
    type: 'loginUser',
    payload: {email, password, userDetails}
  }
);