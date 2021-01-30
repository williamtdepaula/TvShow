import React, { FC } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

interface ITextButtonProps {
    text: string;
    onPress: () => void;
}

const TextButton: FC<ITextButtonProps> = ({ text, onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text style={styles.txtButton}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        margin: 20,
    },
    txtButton: {
        color: '#8580CC',
        fontSize: 16,
    },
});

export default TextButton;