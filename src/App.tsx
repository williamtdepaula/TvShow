import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigator';
import store from './store/ducks/tv_show/store';

const App: FC = () => {
  return (
    <Provider store={store} >
      <Navigator />
    </Provider>
  );
}

export default App;