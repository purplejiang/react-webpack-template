import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
// import { setConfig } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import TestPage from 'containers/TestPage';
import NotFoundPage from 'containers/NotFoundPage';
import { Provider } from 'react-redux';
import store from './store';

// setConfig({ logLevel: 'debug' });

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={TestPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
