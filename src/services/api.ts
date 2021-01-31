import axios from 'axios';

const api = axios.create({
    baseURL: "https://sample-api-78c77.firebaseio.com",
})

async function getTvShowData() {

    try {
        let res = await api.get('/tv-shows/SHOW123.json');

        return res.data
    } catch (e) {
        throw new Error(e);
    }
}

async function getTvShowEpisodes() {
    try {
        let res = await api.get('/episodes/SHOW123.json');

        return res.data
    } catch (e) {
        throw new Error(e);
    }
}

export {
    getTvShowData,
    getTvShowEpisodes,
}