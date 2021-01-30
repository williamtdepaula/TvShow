import axios from 'axios';

const api = axios.create({
    baseURL: "https://sample-api-78c77.firebaseio.com",
})

async function getTvShowData() {

    try {
        var random_boolean = Math.random() < 0.5;

        let res = await api.get(random_boolean ? '/tv-shows/SHOW123.js' : '/tv-shows/SHOW123.json');

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