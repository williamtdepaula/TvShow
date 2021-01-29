import React, { FC } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Cast from '../components/cast';
import HeaderDetails from '../components/header_details';
import TabViewExample from '../components/season_tab_view/season_tab_view';

const TvShowDetails: FC = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderDetails
                    backgroundImageUrl={'https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg'}
                    title='Peny Dreadful'
                    genres='Teste, Testado'
                    year={2015}
                />
                <Text style={styles.synopsi}>
                    Contos de personagens clássicos como Drácula, Frankenstein e Dorian Gray estão reunidos nesta série de terror ambientada nas ruas da Londres vitoriana.
                </Text>
                <Cast
                    cast={['teste', 'teste1', 'abc', 'sads', 'test', 'asdasdasd']}
                />
            </SafeAreaView>

            <TabViewExample />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    synopsi: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    }
})


export default TvShowDetails;


//https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg