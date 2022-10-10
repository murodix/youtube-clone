import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './content.scss';
import Guide from './guide/Guide';
import SearchList from './search-list/SearchList';
import TagSlider from './tag-slider/TagSlider';
import VideosGrid from './videos-grid/VideosGrid';

const Content = () => {

    const isSideBarExpanded = useSelector(state => state?.sidebar?.isExpanded);
    const search = useSelector(state => state?.search?.searchValue);

    return (
        <div className="content">
            <div className="content__left">
                <Guide />
            </div>
            <div className={`content__right ${isSideBarExpanded ? "" : "collase"}`}>
                <TagSlider />
                <Routes>
                    <Route path="/" element={<VideosGrid/>} />
                    <Route path="/search" element={<SearchList search={search} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content
