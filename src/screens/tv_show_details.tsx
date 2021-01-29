import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderDetails from '../components/header_details';

const TvShowDetails : FC =  () => {
    return (
        <View style={styles.container}>
            <HeaderDetails 
                backgroundImageUrl={'https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg'} 
                title='Peny Dreadful'
                genres='Teste, Testado'
                year={2015}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})


export default TvShowDetails;


//https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg