import React, { FC } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabs from './tabs';
import EpisodesList from '../list/epsodes';
import { useSelector } from 'react-redux';
import { Episode } from '../../store/ducks/tv_show/types';
import { ApplicationState } from '../../store/ducks/tv_show/store';

const SeasonTabs: FC = () => {

    const tvShowEpisodes: Episode[] = useSelector((state: ApplicationState) => state.tvShowDetails.episodes);

    function getAllSeasons(): number[] {
        const allSeasons: number[] = tvShowEpisodes.map((episode: Episode) => episode.SeasonNumber);
        const seasonsWithoutRepeat: number[] = allSeasons.filter((x: number, index: number, array: number[]) => array.indexOf(x) == index);

        return seasonsWithoutRepeat;
    }

    function getTextSeasons(): string[] {
        const seasons: number[] = getAllSeasons();

        return seasons.map((season: number) => `T${season}`);
    }

    function handlerRenderEpisodesTab() {
        return getAllSeasons().map((season: number, i: number) => <EpisodesList key={i} season={season} />);
    }

    return (
        <ScrollableTabView
            renderTabBar={(props) => <Tabs onPressTab={props.goToPage} currentTabFocusedIndex={props.activeTab} seasonTabs={getTextSeasons()} />}
        >

            {handlerRenderEpisodesTab()}
        </ScrollableTabView>
    );
}

export default SeasonTabs;