import React, { FC } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const LoadingIndicator: FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#fff' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default LoadingIndicator;