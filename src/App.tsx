import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './navigator';
import store from './store/ducks/tv_show/store';

const App: FC = () => {
  return (
    <Provider store={store} >
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <Navigator />
    </Provider>
  );
}

export default App;