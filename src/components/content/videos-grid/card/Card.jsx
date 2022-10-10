import { useEffect, useState } from 'react';
import YoutubeApi from '../../../../api/YoutubeApi';
import useFetchContent from '../../../../hooks/useFetchContent';
import { formatPublishedAt, formatViews, truncateText } from '../../../../utils/Utils';
import './card.scss';

const Card = ({ video, displayDescription }) => {


    const channel = useFetchContent(`/channels?part=contentDetails%2Cstatistics&id=${video?.snippet?.channelId}`);

    const [videoDetails, setVideoDetails] = useState({});

    useEffect(() => {

        const getVideoDetails = async () => {
            const { data } = await YoutubeApi("/videos", {
                params: {
                    part: "snippet, contentDetails, statistics",
                    id: video?.id?.videoId || video?.id,
                },
            });
            setVideoDetails(data.items[0]);
        }

        getVideoDetails();

        return () => {

        }
    }, [video])


    return (
        <div className="card">
            <div className="card__container">
                <img className="card__img" src={video.snippet.thumbnails.medium.url} alt="" />
                <div className="card__container-details">

                    <div className="card__container-details-left">
                        <img className="card__channel-img" src={channel && channel.length > 0 ? channel[0].snippet.thumbnails.default.url : ""} alt="" />
                    </div>
                    <div className="card__container-details-right">
                        <h4 className="video__title">{video.snippet.title}</h4>
                        <p className="channel__name" >{video.snippet.channelTitle}</p>
                        {displayDescription && <p className="video__desc" >{truncateText(video.snippet.description, 70)}</p>}
                        <p className="" >{formatViews(videoDetails?.statistics?.viewCount)} views • {formatPublishedAt(video.snippet.publishedAt)}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Card

