import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style';
import { IconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle/>
        <IconFontStyle/>
        {/*<Header/>*/}
        <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/detail' exact component={Detail}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
