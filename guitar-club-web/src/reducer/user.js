import * as ActionTypes from '../action/ActionTypes';

const initialState= null;
const user = (state = initialState, action)=>{
  switch(action.type){
    case ActionTypes.SIGN_UP_SUCCESS:{
      return {
        ...state,
        auth_id:action.auth_id
      };
    }
    case ActionTypes.SIGN_UP_FAIL:{
      return [
        ...state
      ];
    }
    default:{
      return state;
    }
  }
};

export default user;
