import React from 'react';
import GuideSection from './guide-section/GuideSection';
import './guide.scss'
import guideSectionData from './guide-section/guideSectionData';

const Guide = ({ showText }) => {
    return (
        <div className="guide">
            <GuideSection items= {guideSectionData.sectionOne} />
            <GuideSection items= {guideSectionData.sectionTwo} />
        </div>
    )
}

export default Guide
