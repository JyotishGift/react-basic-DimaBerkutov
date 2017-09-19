import * as types from './types';
import Api from '../services/api';

// userData
// name: string
// password: string
export const signIn = userData => {
  return async dispatch => {
    console.log(userData);
    const signinMessage = await Api.signIn(userData);
    // Если запрос был удачный -
    if (signinMessage.status === 'success') {
      dispatch({
        type: types.AUTH_USER,
        payload: {
          accessToken: signinMessage.message.token
        }
      });

      localStorage.setItem('token', signinMessage.message.token)
    }
    // -- просигналить, что пользователь авторизирован
    // -- сохранить токен
    // JWT -- message: succes, token: ...
    // Если плохой
    // -- отобразить ошибку
  };
};
