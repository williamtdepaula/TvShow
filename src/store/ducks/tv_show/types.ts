//Action types
export enum TvShowTypes {
    LOAD_REQUEST_TV_SHOW_DATA = "@tv_show/LOAD_REQUEST_TV_SHOW_DATA",
    LOAD_SUCCESS_TV_SHOW_DATA = '@tv_show/LOAD_SUCCESS_TV_SHOW_DATA',
    LOAD_FAILURE_TV_SHOW_DATA = "@tv_show/LOAD_FAILURE_TV_SHOW_DATA",
    CHANGE_EPISODE_FOCUSED = '@tv_show/CHANGE_EPISODE_FOCUSED',
};

//Data types
export interface Cast {
    ID: string;
    Name: string;
}

export interface Genre {
    ID: string;
    Title: string;
}

export interface Image {
    Background: string;
}

export interface TvShowDetail {
    ID: number;
    Images: Image;
    Synopsis: string;
    Title: string;
    Year: number;
    Cast: Cast[];
    Genres: Genre[];
};

export interface Episode{
    Duration: number;
    EpisodeNumber: number;
    ID: string;
    Image: string;
    SeasonNumber: number;
    Synopsis: string;
    Title: string;
}

//State type
export interface TvShowState {
    readonly tvShowDetail: TvShowDetail;
    readonly episodes: Episode[];
    readonly idEpisodeFocused: string | null;
    readonly loading: boolean;
    readonly error: boolean;
} 
