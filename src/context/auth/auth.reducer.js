export const INITIAL_STATE = { user: null, logged: false };

const types = {
  login: '[auth] login',
  logout: '[auth] logout',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.login:
      return { user: action.payload, logged: true };
    case types.logout:
      return {
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};

export const actions = {
  login: (user) => ({ type: types.login, payload: user }),
  logout: () => ({ type: types.logout }),
};
