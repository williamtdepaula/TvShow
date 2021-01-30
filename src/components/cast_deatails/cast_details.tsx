import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Cast } from '../../store/ducks/tv_show/types';

interface ICastDetailsProps {
    cast: Cast[];
}

const CastDetails: FC<ICastDetailsProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitleCast}>
                <Text style={styles.titleCast}>Elenco:</Text>
            </View>
            <View style={styles.containerCast}>
                <Text style={styles.txtCast}>{props.cast.map((cast: Cast) => cast.Name).join(', ')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    containerTitleCast: {
        flex: 1,
    },
    containerCast: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    titleCast: {
        color: '#8580CC',
        fontSize: 18,
    },
    txtCast: {
        color: '#fff',
        fontSize: 16,
    }
});

export default CastDetails;