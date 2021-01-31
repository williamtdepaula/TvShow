import React, { FC, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CastDetails from '../components/cast_deatails';
import Error from '../components/error';
import HeaderDetails from '../components/header_details';
import LoadingIndicator from '../components/loading_indicator';
import SeasonsTab from '../components/season_tab';
import { loadRequestTvShowData } from '../store/ducks/tv_show/actions';
import { ApplicationState } from '../store/ducks/tv_show/store';
import { TvShowDetail } from '../store/ducks/tv_show/types';

const TvShowDetailsScreens: FC = () => {

    const dispatch = useDispatch();

    const tvShowDetailsData: TvShowDetail = useSelector((state: ApplicationState) => state.tvShowDetails.tvShowDetail);
    const loadingTvShowDetailsData: boolean = useSelector((state: ApplicationState) => state.tvShowDetails.loading);
    const errorTvShowDetailsData: boolean = useSelector((state: ApplicationState) => state.tvShowDetails.error);

    useEffect(() => {
        requestTvShowData();
    }, []);

    function requestTvShowData(): void {
        dispatch(loadRequestTvShowData());
    }

    return (
        <View style={styles.container}>
            {loadingTvShowDetailsData
                ?
                <LoadingIndicator />
                :
                tvShowDetailsData.ID
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
                        <SeasonsTab />
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
    },
    synopsi: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    }
});

export default TvShowDetailsScreens;