import React from 'react'
import './tag.scss'

const Tag = ({ text, active, onClick }) => {
    return (
        <span onClick={() => onClick(text)} className={`tag ${active ? "active" : ""} `}>
            {text}
        </span>
    )
}

export default Tag
