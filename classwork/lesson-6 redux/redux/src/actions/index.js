// action-creator
import { DEC, INC } from './types';

export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: INC });
        
    }, 1000);
    //  => token 
    //  => dispatch(profile) 
    //  => repository

    token()
    profile()
    repository()    
    
    // profile
    // repository
  };
};

// action-creator
export const decrement = () => {
  return { type: DEC };
};
