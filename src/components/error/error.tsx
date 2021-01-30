import React, { FC } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import TextButton from '../button';

interface IErrorProps {
    text: string;
    onPressToTryAgain: () => void;
}

const Error: FC<IErrorProps> = ({ text, onPressToTryAgain }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.txtWarning}>{text}</Text>
            <TextButton text='Tentar novamente' onPress={onPressToTryAgain} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtWarning: {
        color: "#fff",
        fontSize: 20,
    }
});

export default Error;