import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './component/Header'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import {loadUser} from './action';
import Home from './page/Home';
import Introduce from './page/Introduce';
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
          <Route exact path="/introduce" component={Introduce}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
