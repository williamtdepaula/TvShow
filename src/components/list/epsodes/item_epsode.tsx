import React, { FC, useState } from 'react';
import { View, StyleSheet, Text, Platform, UIManager, LayoutAnimation, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const ItemEpsode: FC = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    function openOrCloseDetails(): void {
        //Animation open or close details
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowDetails((old: boolean) => !old)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={openOrCloseDetails}>
                <View style={styles.containerTitle}>
                    <Text style={styles.txtTitle}>1 Teste</Text>
                </View>
            </Pressable>
            {showDetails &&
                <View style={styles.containerDetails}>
                    <View style={styles.containerImage}>
                        <FastImage
                            style={styles.image}
                            source={{ uri: 'https://occ-0-894-1123.1.nflxso.net/art/e0e90/292975320f88a9f3fc741c132d0ec2ac20ce0e90.webp' }}
                        />
                    </View>
                    <Text style={styles.txtSynopsi}>Londres, 1891. A polícia investiga uma série de assassinatos, mas Sir Malcolm Murray e a bela Vanessa Ives sabem que há algo mais sombrio por trás de tudo.</Text>
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
    },
    txtSynopsi: {
        fontSize: 16,
        color: '#fff',
        flex: 1,
    }
});

export default ItemEpsode;