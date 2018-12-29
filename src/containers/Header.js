import React from 'react';
import ReactDOM from 'react-dom';

import Search from 'components/Search.js';
import profilePic from '../assets/images/alan.png';

export default class Header extends React.Component {
    
    render() {
        return (
            <header>
                <div className="logo-box">
                    <img alt="Alan Yin" src={profilePic}/>
                </div>
                <div className="title">
                    <div className="title-wrapper">
                        <h1>Lost in space</h1>
                        <h3>Personal blog by Alan Yin</h3>
                    </div>
                </div>
                <Search/>
            </header>
        );
    }
}