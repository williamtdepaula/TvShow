import React, { FC, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../store/ducks/tv_show/store';
import { Episode } from '../../../store/ducks/tv_show/types';
import ItemEpisode from './item_episode';

interface IEpisodesListProps {
    season: number;
};

const EpisodesList: FC<IEpisodesListProps> = ({ season }) => {
    const refListEpisodes = useRef<FlatList<Episode>>(null);

    const tvShowEpisodes: Episode[] = useSelector((state: ApplicationState) => state.tvShowDetails.episodes);

    function scrollToEpisodeWhenExpanded(index: number): void {
        if (refListEpisodes.current) {
            refListEpisodes.current.scrollToIndex({ index, animated: true });
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                ref={refListEpisodes}
                data={tvShowEpisodes.filter((episode: Episode) => episode.SeasonNumber == season)}
                keyExtractor={(item) => item.ID}
                renderItem={({ item, index }) => <ItemEpisode episode={item} onOpenEpisode={() => scrollToEpisodeWhenExpanded(index)} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtTitle: {
        color: '#fff',
        fontSize: 18,
    },
    containerDetails: {
        flexDirection: 'row',
    }
});

export default EpisodesList;