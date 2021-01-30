import React, { FC } from 'react';
import { Provider } from 'react-redux';
import TvShowDetails from './src/screens/tv_show_details';
import store from './src/store/ducks/tv_show/store';

const App: FC = () => {
  return (
    <Provider store={store} >
      <TvShowDetails />
    </Provider>
  );
}

export default App;