import React, { useRef, useState, useEffect } from 'react';
import Tag from './tag/Tag';
import './tagSlider.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useFetchContent from '../../../hooks/useFetchContent';

const TagSlider = () => {

    const SLIDE_WIDTH = 200;

    const [activeTag, setActiveTag] = useState("All");
    const [slide, setSlide] = useState(0);
    const [canScrollRight, setCanScrollRight] = useState(0);

    const tags = useFetchContent("/videoCategories");

    const sliderRef = useRef(null);


    const handleClick = (tagText) => {
        setActiveTag(tagText);
    }

    const handleLeftSlide = () => {
        setSlide(slide + SLIDE_WIDTH);
    }

    const handleRighttSlide = () => {
        (canScrollRight || slide === 0) && setSlide(slide - SLIDE_WIDTH);
    }

    useEffect(() => {
        setCanScrollRight(sliderRef?.current?.parentElement?.offsetWidth + (slide * (-1)) <= sliderRef?.current?.offsetWidth)
    }, [slide, canScrollRight])

    return (
        <div className="tagSlider">
            <div className="tagSlider__container">
                {slide < 0 && <MdChevronLeft onClick={handleLeftSlide} className="tagSlider__arrow left" size={32} />}
                <div ref={sliderRef} className="tagSlider__container-wrapper" style={{ transform: `translateX(${slide}px)` }}>
                    {tags?.map((tag, index) => {
                        return (<Tag key={index} onClick={handleClick} text={tag.snippet.title} active={activeTag === tag.snippet.title} />)
                    })}
                </div>
                {<MdChevronRight onClick={handleRighttSlide} className="tagSlider__arrow right" size={32} />}
            </div>

        </div>
    )
}

export default TagSlider
