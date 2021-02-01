import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Platform, UIManager, LayoutAnimation, Pressable, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux';
import { changeEpisodeFocused } from '../../../store/ducks/tv_show/actions';
import { ApplicationState } from '../../../store/ducks/tv_show/store';
import { Episode } from '../../../store/ducks/tv_show/types';

const { height } = Dimensions.get('window');

//To use LayoutAnimation on android
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

interface IItemEpisodeProps {
    episode: Episode;
    onOpenEpisode: () => void;
};

const ItemEpisode: FC<IItemEpisodeProps> = ({ episode, onOpenEpisode, }) => {
    const dispatch = useDispatch();

    const idEpisodeFocused: string | null = useSelector((state: ApplicationState) => state.tvShowDetails.idEpisodeFocused);
    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        /*
            Check if this episode is expanded and if the episode that was expanded, 
            which is in the store is not. If it is not the same, 
            close this one, to keep it just an expanded episode.
        */
        if (showDetails && idEpisodeFocused != episode.ID) {
            animateOpenOrClose();
            setShowDetails(false);
        }
    }, [idEpisodeFocused])

    function openOrCloseDetails(): void {
        animateOpenOrClose();
        sendToStoreEpisodeIdWhenExpandEpisode();
        setShowDetails((old: boolean) => !old);
    }

    function sendToStoreEpisodeIdWhenExpandEpisode(): void {
        if (!showDetails) dispatch(changeEpisodeFocused(episode.ID));
    }

    function animateOpenOrClose(): void {
        //Animation open or close details
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, () => {
            //When animation finished, will call function if showDetails is false
            if (!showDetails) onOpenEpisode();
        });

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
                            resizeMode='cover'
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: height * 0.1,
        backgroundColor: "#292929",
    },
    txtSynopsi: {
        flex: 1.5,
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito-Regular',
    }
});

export default ItemEpisode;