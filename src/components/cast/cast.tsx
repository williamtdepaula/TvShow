import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ICastProps {
    cast: string[];
}

const Cast: FC<ICastProps> = (props) => {

    function _handlerRenderCast() : Element[] {
        return props.cast.map((cast: string, index: number) => <Text key={index} style={styles.txtCast}>{cast + ((index < props.cast.length - 1) ? ', ' : '')}</Text>);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitleCast}>
                <Text style={styles.titleCast}>Elenco:</Text>
            </View>
            <View style={styles.containerCast}>
                {_handlerRenderCast()}
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

export default Cast;