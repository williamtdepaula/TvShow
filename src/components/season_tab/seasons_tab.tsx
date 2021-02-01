import React, { FC, useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Tab from './tab';
import EpisodesList from '../list/episodes';
import { useSelector } from 'react-redux';
import { Episode } from '../../store/ducks/tv_show/types';
import { ApplicationState } from '../../store/ducks/tv_show/store';
import { TabView, SceneRendererProps, NavigationState, Route, TabBar } from 'react-native-tab-view';

const { width } = Dimensions.get('window');

const SeasonsTab: FC = () => {

    const tvShowEpisodes: Episode[] = useSelector((state: ApplicationState) => state.tvShowDetails.episodes);

    const [currentTab, setCurrentTab] = useState<number>(0);
    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        makeTabs()
    }, [])

    function getAllSeasons(): number[] {
        const allSeasons: number[] = tvShowEpisodes.map((episode: Episode) => episode.SeasonNumber);
        const seasonsWithoutRepeat: number[] = allSeasons.filter((x: number, index: number, array: number[]) => array.indexOf(x) == index);

        return seasonsWithoutRepeat;
    }

    function makeTabs() {

        const tabs: Route[] = getAllSeasons().map((item: number) => {
            return {
                key: item.toString(),
                title: `T${item}`,
            }
        });

        setRoutes(tabs);

    }

    const _renderScene = (props: any) => {
        return (
            <EpisodesList key={props.route.key} season={props.route.key} />
        );
    };


    const tabBar = (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => {
        return (
            <TabBar
                {...props}
                tabStyle={styles.tab}
                renderIndicator={() => null}
                indicatorStyle={{ bottom: 6 }}
                style={styles.tabBarContainer}
                renderLabel={(props) => <Tab title={props.route.title} focused={props.focused} />}
            />
        );
    }

    return (
        <TabView
            renderScene={_renderScene}
            onIndexChange={setCurrentTab}
            initialLayout={styles.initialLayout}
            navigationState={{ index: currentTab, routes }}
            renderTabBar={tabBar}
        />
    );
}

const styles = StyleSheet.create({
    initialLayout: {
        width: width
    },
    tabBarContainer: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    tab: {
        alignItems: 'flex-start',
        width: width * 0.15,
    },
});

export default SeasonsTab;