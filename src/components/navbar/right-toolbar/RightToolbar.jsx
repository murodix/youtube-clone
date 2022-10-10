import React from 'react';
import './rightToolbar.scss';

import { RiVideoAddLine } from 'react-icons/ri';
import {BsGrid3X3Gap} from 'react-icons/bs';
import {IoNotificationsOutline} from 'react-icons/io5';

const RightToolbar = () => {
    return (
        <div className="rightToolbar">
            <RiVideoAddLine className="icon"/>
            <BsGrid3X3Gap className="icon"/>
            <IoNotificationsOutline className="icon"/>
            <div className="rightToolbar__profile">

            </div>
        </div>
    )
}

export default RightToolbar
