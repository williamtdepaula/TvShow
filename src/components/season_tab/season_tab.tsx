import React, { FC } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabs from './tabs';
import EpsodesList from '../list/epsodes';

const SeasonTabs: FC = () => {
    return (
        <ScrollableTabView
            renderTabBar={(props) => <Tabs onPressTab={props.goToPage} currentTabFocusedIndex={props.activeTab} seasonTabs={['T1', 'T2']} />}
        >
            <EpsodesList />
            <EpsodesList />
        </ScrollableTabView>
    );
}

export default SeasonTabs;