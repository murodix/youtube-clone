import { useState, useEffect } from "react";
import YoutubeApi from '../api/YoutubeApi';

export default function useFetchContent(requestUrl) {


    const [content, setContent] = useState([]);

    useEffect(() => {
        const request = YoutubeApi.get(requestUrl).then((res) => {
            const results = res.data.items;
            setContent(results);
            return results;
        });

        return () => {
            return request;
        }
    }, [requestUrl]);


    return content;
}