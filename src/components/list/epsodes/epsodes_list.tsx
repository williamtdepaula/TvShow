import React, { FC, useRef } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../store/ducks/tv_show/store';
import { Episode } from '../../../store/ducks/tv_show/types';
import ItemEpisode from './item_episode';

interface IEpisodesListProps {
    season: number;
}

const EpisodesList: FC<IEpisodesListProps> = ({ season }) => {
    const refListEpisodes = useRef<FlatList<Episode>>(null);

    const tvShowEpisodes: Episode[] = useSelector((state: ApplicationState) => state.tvShowDetails.episodes);

    function scrollToEpisodeWhenExpanded(item: Episode): void {
        if (refListEpisodes.current) refListEpisodes.current.scrollToItem({ item: item });
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    ref={refListEpisodes}
                    data={tvShowEpisodes.filter((episode: Episode) => episode.SeasonNumber == season)}
                    keyExtractor={(item) => item.ID}
                    renderItem={({ item }) => <ItemEpisode episode={item} onOpenEpisode={() => scrollToEpisodeWhenExpanded(item)} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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