import { Reducer } from 'redux';
import { TvShowDetail, TvShowState, TvShowTypes } from './types';

const INITIAL_STATE: TvShowState = {
    tvShowDetail: {} as TvShowDetail,
    episodes: [],
    error: false,
    loading: false,
};

const reducer: Reducer<TvShowState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TvShowTypes.LOAD_REQUEST_TV_SHOW_DATA:
            return { ...state, loading: true, error: false, };
        case TvShowTypes.LOAD_SUCCESS_TV_SHOW_DATA:
            return {
                ...state,
                loading: false,
                error: false,
                tvShowDetail: action.payload.tvShowDetail,
                episodes: action.payload.episodes,
            };
        case TvShowTypes.LOAD_FAILURE_TV_SHOW_DATA:
            return {
                ...state,
                loading: false,
                error: true,
                tvShowDetail: {} as TvShowDetail,
                episodes: [],
            };
        default:
            return state;
    }
};

export default reducer;