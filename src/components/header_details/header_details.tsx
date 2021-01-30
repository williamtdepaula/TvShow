import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IHeaderDetailsProps {
    backgroundImageUrl: string;
    title: string;
    genres: string;
    year: number;
}

const HeaderDetails: FC<IHeaderDetailsProps> = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: props.backgroundImageUrl }}
                style={styles.imageBackground}
                resizeMode='cover'
            >
                <LinearGradient colors={['transparent', '#1a1919']} style={styles.containerInsideBackgroundImage}>
                    <Text style={styles.txtTitle}>{props.title}</Text>
                    <Text style={styles.txtGenresAndYear}>{`${props.genres} / ${props.year}`}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.3,
    },
    imageBackground: {
        flex: 1,
    },
    containerInsideBackgroundImage: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 16,
    },
    txtTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    txtGenresAndYear: {
        fontSize: 16,
        color: '#fff',
    }
})

export default HeaderDetails;