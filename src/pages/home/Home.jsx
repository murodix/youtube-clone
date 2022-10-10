import React, { useState } from 'react'
import Content from '../../components/content/Content';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = () => {


    return (
        <div className="home">
            <Navbar/>
            <Content/>
        </div>
    )
}

export default Home
