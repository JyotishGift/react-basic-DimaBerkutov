// import { AUTH_USER, UNATH_USER, AUTH_ERROR } from '../actions/types';

import * as types from '../actions/types';

const initialState = {
  authenticated: false,
  error: '',
  accessToken: undefined
};
/*
AUTH_USER
UNAUTH_USER
AUTH_ERROR
*/
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: '',
        accessToken: action.payload.accessToken
      };
    case types.UNATH_USER:
      return {
        ...state,
        authenticated: false,
        accessToken: undefined,
        error: ''
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload.errorMessage
      };
    default:
      return state;
  }
};

export default authReducer;
