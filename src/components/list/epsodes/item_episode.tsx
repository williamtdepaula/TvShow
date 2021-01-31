import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Platform, UIManager, LayoutAnimation, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image'
import { Episode } from '../../../store/ducks/tv_show/types';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

interface IItemEpisodeProps {
    episode: Episode;
    onOpenEpisode: () => void;
}

const ItemEpisode: FC<IItemEpisodeProps> = ({ episode, onOpenEpisode }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        if (showDetails) onOpenEpisode();
    }, [showDetails]);

    function openOrCloseDetails(): void {
        //Animation open or close details
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowDetails((old: boolean) => !old);
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={openOrCloseDetails}>
                <View style={styles.containerTitle}>
                    <Text style={styles.txtTitle}>{`${episode.EpisodeNumber} ${episode.Title}`}</Text>
                </View>
            </Pressable>
            {showDetails &&
                <View style={styles.containerDetails}>
                    <View style={styles.containerImage}>
                        <FastImage
                            style={styles.image}
                            source={{ uri: episode.Image }}
                        />
                    </View>
                    <Text style={styles.txtSynopsi}>{episode.Synopsis}</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    containerTitle: {
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    txtTitle: {
        color: '#fff',
        fontSize: 18,
        padding: 10,
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    containerImage: {
        flex: 1,
        padding: 15,
    },
    image: {
        flex: 1,
        backgroundColor: "#292929",
    },
    txtSynopsi: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito-Regular',
    }
});

export default ItemEpisode;