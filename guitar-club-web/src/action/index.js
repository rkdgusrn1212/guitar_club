import * as types from './ActionTypes'
import * as Auth from '../utils/auth'


//인증상태
export const AuthState={
  UNKNOWN:"UNKNOWN",//모름
  LOADING:"LOADING",//인증정보 불러오는 중
  SIGNING:"SIGNING",//인증중
  SIGNED:"SIGNED",//인증됨
  LOADING_FAILED:"LOADING_FAILED",//인증정보 불러오기 실패
  SIGN_IN_FAILED:"SIGN_IN_FAILED",//인증 실패
  UN_SIGNED:"UN_SIGNED"//인증안됨
};

export function loadUserSuccess(id,idToken){
  return {
    type:types.LOAD_USER_SUCCESS,
    id:id,
    idToken:idToken
  };
}

export function loadUserProgress(err){
  return{
    type:types.LOAD_USER_PROGRESS,
    err:err
  }
}

export function loadUserFailed(err){
  return{
    type:types.LOAD_USER_FAILED,
    err:err
  }
}

export function signInSuccess(id,idToken){
  return {
    type:types.SIGN_IN_SUCCESS,
    id:id,
    idToken:idToken
  };
}

export function signInProgress(){
  return {
    type:types.SIGN_IN_PROGRESS
  };
}


export function SignInFailed(err){
  return{
    type:types.SIGN_IN_FAILED,
    err:err
  }
}

export function signOutSuccess(){
  return {
    type:types.SIGN_OUT_SUCCESS
  };
}
export function signOutFailed(err){
  return {
    type:types.SIGN_OUT_FAILED,
    err:err
  };
}

export function loadUser(){
  return (dispatch, getState)=>{
    dispatch(loadUserProgress());
    Auth.getUser(function(err,data){
      if(err){
        dispatch(loadUserFailed(err));
      }else{
        dispatch(loadUserSuccess(data.idToken.payload["cognito:username"],data.idToken.jwtToken));
      }
    });
  };
}

export function signIn(id,password){
  return (dispatch, getState)=>{
    if(getState().user.authState===AuthState.SIGNED){
      dispatch(SignInFailed("ALREADY_SIGNED"));
      return;
    }
    dispatch(signInProgress());
    Auth.signIn(id,password,function(err,data){
      if(err){
        dispatch(SignInFailed(err));
      }else{
        dispatch(signInSuccess(data.idToken.payload["cognito:username"],data.idToken.jwtToken));
      }
    });
  };
}

export function signOut(){
  return (dispatch)=>{
    Auth.signOut(function(err,result){
      if(err){
        dispatch(signOutFailed(err));
      }else{
        dispatch(signOutSuccess());
      }
    })
  }
}
