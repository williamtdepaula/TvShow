import React, { FC } from 'react';
import { View, StyleSheet, } from 'react-native';
import ItemEpsode from './item_epsode';

const EpsodesList: FC = () => {
    return (
        <View style={styles.container}>
            <ItemEpsode />
            <ItemEpsode />
        </View>
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

export default EpsodesList;