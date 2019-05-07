import React, { Component } from 'react';
import { Globalstyle } from './style';
import { IconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle/>
        <IconFontStyle/>
        <Header/>
      </Provider>
    );
  }
}

export default App;
