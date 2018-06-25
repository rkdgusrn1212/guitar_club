import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import Header from './Header'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import {signIn, signUp, signOut, loadUser} from '../action';
import Home from '../page/Home';
/*
앱 내의 어느 곳에서나 사용 가능한 dispatch와 state들을 연결시킨다. 그렇게 해서 connect함수 호출로직의 중복 작성을 최대한으로 줄인다.
그러나 앱 일부에서만 사용되야 하는것들은 여기서 선언하면 component선언과 함깨 인자로 넘겨줘야 하기 때문에 여기서 선언 안해주는게 코드 간결화에 좋다고 생각한다.
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route component={WrongURL}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

/*
유저로드와 로그아웃은 앱 내의 어느부분에서나 호출 가능하여야 한다.
유저상태도 앱 어느부분에서나 읽을 수 있어야 한다.
*/
App.PropTypes = {
  onSignOut: PropTypes.func.isRequired,
  onLoadUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
  return{
    user:state.user
  };
}


const mapDispatchToProps = (dispatch)=>{
  return{
    onSignOut: ()=>{
      dispatch(signOut());
    },
    onLoadUser: ()=>{
      dispatch(loadUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
