import { combineReducers } from 'redux';
import TvShowReducer from './tv_show';

const appReducer = combineReducers({
    tvShowDetails: TvShowReducer,
});

export default appReducer;