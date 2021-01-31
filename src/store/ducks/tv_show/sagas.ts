import { put, call, delay } from 'redux-saga/effects';
import { getTvShowData, getTvShowEpisodes } from '../../../services/api';
import { Episode, TvShowDetail } from './types';
import { loadFailureTvShowData, loadSuccessTvShowData } from './actions';

function* asyncGetTvShowData() {
    try {
        const tvShowDetail: TvShowDetail = yield call(getTvShowData);
        let tvShowEpisodes: Episode[] = yield call(getTvShowEpisodes);

        tvShowEpisodes = tvShowEpisodes.filter((episode) => episode != null);

        yield put(loadSuccessTvShowData(tvShowDetail, tvShowEpisodes));
    } catch (err) {
        yield put(loadFailureTvShowData());
    }
}

export {
    asyncGetTvShowData,
}