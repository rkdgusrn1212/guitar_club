const user = (state = [], action)=>{
  switch(action.type){
    case 'SIGN_IN':{
      return [
        ...state
      ];
    }
    case 'SIGN_UP':{
      return [
        ...state
      ];
    }
    default:{
      return state;
    }
  }
}

export default user;
