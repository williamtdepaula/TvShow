import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CastDetails from '../components/cast_deatails';
import Error from '../components/error';
import HeaderDetails from '../components/header_details';
import SeasonTabs from '../components/season_tab';
import { getTvShowData } from '../store/ducks/tv_show/actions';
import { ApplicationState } from '../store/ducks/tv_show/store';
import { TvShowDetail } from '../store/ducks/tv_show/types';

const TvShowDetails: FC = () => {

    const dispatch = useDispatch();

    const tvShowDetailsData: TvShowDetail = useSelector((state: ApplicationState) => state.tvShowDetails.tvShowDetail);
    const loadingTvShowDetailsData: boolean = useSelector((state: ApplicationState) => state.tvShowDetails.loading);
    const errorTvShowDetailsData: boolean = useSelector((state: ApplicationState) => state.tvShowDetails.error);

    useEffect(() => {
        requestTvShowData();
    }, []);

    function requestTvShowData(): void {
        dispatch(getTvShowData());
    }

    return (
        <View style={styles.container}>
            {loadingTvShowDetailsData
                ?
                <ActivityIndicator size='large' color='#fff' />
                :
                (tvShowDetailsData.ID && !errorTvShowDetailsData)
                    ?
                    <>
                        <SafeAreaView>
                            <HeaderDetails
                                backgroundImageUrl={tvShowDetailsData.Images.Background}
                                title={tvShowDetailsData.Title}
                                genres={tvShowDetailsData.Genres}
                                year={tvShowDetailsData.Year}
                            />
                            <Text style={styles.synopsi}>
                                {tvShowDetailsData.Synopsis}
                            </Text>
                            <CastDetails
                                cast={tvShowDetailsData.Cast}
                            />
                        </SafeAreaView>
                        <SeasonTabs />
                    </>
                    :
                    errorTvShowDetailsData
                        ?
                        <Error
                            text='Ops! houve um problema!'
                            onPressToTryAgain={requestTvShowData}
                        />
                        :
                        <></>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: "center",
        alignItems: 'center',
    },
    synopsi: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    }
})


export default TvShowDetails;


//https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg