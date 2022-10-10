import axios from 'axios';

const YoutubeApi = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        maxResults: '28',
        regionCode:'US'
    }
});

export default YoutubeApi;
