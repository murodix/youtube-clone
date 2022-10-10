import React from 'react'
import useFetchContent from '../../../hooks/useFetchContent';
import './searchList.scss';
import Card from '../videos-grid/card/Card';

const SearchList = ({ search }) => {

    const videos = useFetchContent(`/search?q=${search}`);

    return (
        <div className="searchList">
            <div className="searchList__container" >
                {videos.map((video, index) => {
                    return (
                        video?.id?.kind === 'youtube#video' && <Card displayDescription={true} key={index} video={video}></Card>
                    );
                })}
            </div>
        </div>
    )
}

export default SearchList
