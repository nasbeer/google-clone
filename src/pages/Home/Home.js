import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../components/Search/Search';
import TrendButton from '../../components/Button/Button';
import TrendNews from '../../components/TrendNews/TrendNews';
import one from '../../Icon/one.png';
import two from '../../Icon/two.png';
import three from '../../Icon/three.png';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import logo from './jubna_orange_logo.svg';
import './Home.css';

import weather from '../../Icon/ToolbarOption.png';


function Home() {
    return (
        <div className="home">

            <div className="home__header ">
                <div className="home__headerLeft">
                    <Link to="/about" className="no-underline">About</Link>
                    
                </div>
                <div className="home__headerRight ">
                    <img src={weather}/>
                   
                </div>
            </div>

            <div className="home__body">
                <img src={logo} alt="Logo" />

                <div className="home__inputContainer">
                    <Search />
                </div>
                
            </div>
            
            <div className="trendspace_head ">
                <div className="text-center pt-4">
            <TrendButton />
            </div>
            <TrendNews />
            </div>
            
        </div>
    )
}

export default Home;