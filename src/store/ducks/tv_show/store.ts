import createSagaMiddleware from 'redux-saga';

//SAGAS
import rootSaga from '../root_sagas';

//REDUX
import { createStore, applyMiddleware, Store } from 'redux';
import reducers from '../root_reducers';
import { TvShowState } from './types';

export interface ApplicationState{
    tvShowDetails: TvShowState;
};

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;