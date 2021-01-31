import React, { FC } from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { Genre } from '../../store/ducks/tv_show/types';

interface IHeaderDetailsProps {
    backgroundImageUrl: string;
    title: string;
    genres: Genre[];
    year: number;
}

const HeaderDetails: FC<IHeaderDetailsProps> = (props) => {
    return (
        <View style={styles.container}>
            <FastImage
                source={{ uri: props.backgroundImageUrl }}
                style={styles.imageBackground}
                resizeMode='cover'
            >
                <LinearGradient colors={['transparent', '#1a1919']} style={styles.containerInsideBackgroundImage}>
                    <Text style={styles.txtTitle}>{props.title}</Text>
                    <Text style={styles.txtGenresAndYear}>{`${props.genres.map((genre: Genre) => genre.Title).join(', ')} / ${props.year}`}</Text>
                </LinearGradient>
            </FastImage>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.3,
    },
    imageBackground: {
        flex: 1,
        backgroundColor: '#292929'
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
        fontFamily: 'Nunito-Regular',
    },
    txtGenresAndYear: {
        fontSize: 16,
        color: '#fff',
    }
})

export default HeaderDetails;