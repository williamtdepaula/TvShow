import { takeLatest, all } from 'redux-saga/effects'

import {TvShowTypes} from './tv_show/types';

//SAGAS
import * as tvShowSagas from './tv_show/sagas'

export default function* root() {
    yield all([
        takeLatest(TvShowTypes.LOAD_REQUEST_TV_SHOW_DATA, tvShowSagas.asyncGetTvShowData),
    ])
}