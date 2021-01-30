import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

interface ITabSeasonProps {
    seasonTabs: string[];
    currentTabFocusedIndex: number | undefined;
    onPressTab: ((pageNumber: number) => void) | undefined;
}

const Tabs: FC<ITabSeasonProps> = ({ seasonTabs, currentTabFocusedIndex, onPressTab }) => {

    function _handlerRenderTab(): Element[] {
        return seasonTabs.map((tab: string, i: number) => {
            return (
                <TouchableOpacity key={tab} onPress={() => onPressTab ? onPressTab(i) : null} style={styles.tab}>
                    <Text style={[styles.txtTab, { color: currentTabFocusedIndex == i ? '#fff' : '#9A9A9A' }]}>{tab}</Text>
                </TouchableOpacity>
            );
        });
    }

    return (
        <View style={styles.tabs}>
            {_handlerRenderTab()}
        </View>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    txtTab: {
        fontSize: 18,
    },
});
