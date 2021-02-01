import { action } from 'typesafe-actions';
import { TvShowTypes, TvShowDetail, Episode } from './types';

export const loadRequestTvShowData = () => action(TvShowTypes.LOAD_REQUEST_TV_SHOW_DATA);
export const loadSuccessTvShowData = (tvShowDetail: TvShowDetail, episodes: Episode[]) => action(TvShowTypes.LOAD_SUCCESS_TV_SHOW_DATA, { tvShowDetail, episodes });
export const loadFailureTvShowData = () => action(TvShowTypes.LOAD_FAILURE_TV_SHOW_DATA);
export const changeEpisodeFocused = (idEpisodeFocused: string) => action(TvShowTypes.CHANGE_EPISODE_FOCUSED, { idEpisodeFocused });