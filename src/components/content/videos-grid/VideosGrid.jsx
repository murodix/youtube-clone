import useFetchContent from '../../../hooks/useFetchContent';
import Card from './card/Card';
import './videosGrid.scss';


const VideosGrid = () => {

    const videos = useFetchContent("/videos?part=contentDetails%2Cstatistics&chart=mostPopular");

    return (
        <div className="videosGrid">
            <div className="videosGrid__container">
                {videos?.map((item, index) => {
                    return (
                        <Card key={index} video={item} />
                    );
                })}
            </div>
        </div>
    )
}

export default VideosGrid
