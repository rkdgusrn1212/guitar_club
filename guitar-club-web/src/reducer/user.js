import ActionTypes from '../action/ActionTypes';

const initialState= null;
const user = (state = initialState, action)=>{
  switch(action.type){
    case ActionTypes.SIGN_UP_SUCCESS:{
      return {
        ...state,
        :action.auth_id
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
