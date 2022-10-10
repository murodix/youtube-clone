import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './guideSection.scss';

const GuideSection = ({ items }) => {

    const navigate = useNavigate();

    const [selected, setSelected] = useState("Home");

    const handleClick = (event, text, path) => {
        event.preventDefault();
        setSelected(text);
        navigate(path);
    }

    const isSideBarExpanded = useSelector(state => state?.sidebar?.isExpanded);

    return (
        <div className={`guideSection ${!isSideBarExpanded ? "collapse" : ""}`} >
            {items?.map((item, index) => {
                return (
                    <a
                        key={item.text + index}
                        href={item.path}
                        onClick={(e) => handleClick(e, item.text, item.path)}
                        className={`guideSection__link ${item.text === selected ? "active" : ""}`}>

                        {item.icon}
                        {isSideBarExpanded ? <span>{item.text}</span> : ""}
                    </a>)
            })}
            <hr className="guideSection__separator" />
        </div>
    )
}

export default GuideSection
