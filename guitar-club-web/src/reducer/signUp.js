import ActionTypes from '../action/ActionTypes';


const StateTypes = {
  NONE: "NONE",
  PROGRESS: "PROGRESS",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL"
};

const signUp = ( state , action )=>{
  switch(action.type){
    case ActionTypes.SIGN_UP_PROGRESS:{
      return {
        state: StateTypes.PROGRESS
      }
    }
    case ActionTypes.SIGN_UP_SUCCESS:{
      return {
        state: StateTypes.SUCCESS
      }
    }
    case ActionTypes.SIGN_UP_FAILED:{
      return {
        state: StateTypes.FAIL
      }
    }
    default: {
      return {
        state: StateTypes.NONE
      }
    }
  }
}
