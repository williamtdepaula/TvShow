import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#098' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const TabViewExample: FC = () => {
    const [index, setIndex] = React.useState(0);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar />}>

            <Text style={{ color: "#fff" }} >My</Text>
            <Text style={{ color: "#fff" }} >teet</Text>
        </ScrollableTabView>
    );
}

export default TabViewExample;

const styles = StyleSheet.create({
    scene: {
        width: '100%',
        height: '100%',
    },
});